import { create } from 'zustand'

export type UsersCardsFilters = {
  nameUsername: string
  appearance: string[]
  services: string[]
  withVideo: boolean
  hasPromo: boolean
}

export type UsersCardsFiltersActions = {
  update: (newValue: Partial<UsersCardsFilters>) => void
}

export const DEFAULT_VALUES: UsersCardsFilters = {
  nameUsername: '',
  appearance: [],
  services: [],
  withVideo: false,
  hasPromo: false,
}

export const useUsersCardsFiltersStore = create<UsersCardsFilters>(() => DEFAULT_VALUES)

export const usersCardsFiltersActions: UsersCardsFiltersActions = {
  update: (value: Partial<UsersCardsFilters>) => useUsersCardsFiltersStore.setState(() => value),
}
