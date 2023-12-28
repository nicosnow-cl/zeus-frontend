import { create } from 'zustand'

import { EscortType } from '@/common/types/entities/misc/escort.type'

export type UsersCardsFilters = {
  age: [number, number]
  appearance: string[]
  hasPromo: boolean
  nameUsername: string
  nationalities: string[]
  price: [number, number]
  services: string[]
  type: EscortType[]
  withVideo: boolean
}

export type UsersCardsFiltersActions = {
  update: (newValue: Partial<UsersCardsFilters>) => void
}

export const DEFAULT_VALUES: UsersCardsFilters = {
  age: [18, 99],
  appearance: [],
  hasPromo: false,
  nameUsername: '',
  nationalities: [],
  price: [0, 500000],
  services: [],
  type: [],
  withVideo: false,
}

export const useUsersCardsFiltersStore = create<UsersCardsFilters>(() => DEFAULT_VALUES)

export const usersCardsFiltersActions: UsersCardsFiltersActions = {
  update: (value: Partial<UsersCardsFilters>) => useUsersCardsFiltersStore.setState(() => value),
}
