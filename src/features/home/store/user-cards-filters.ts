import { create } from 'zustand'

import { UsersCardsFilters } from '@/common/repositories/users/findAll'

export type UsersCardsFiltersActions = {
  update: (newValue: Partial<UsersCardsFilters>) => void
}

export const DEFAULT_VALUES: UsersCardsFilters = {
  age: [18, 99],
  appearance: [],
  gender: [],
  hasPromo: false,
  name: '',
  nationality: [],
  price: [0, 500000],
  services: [],
  type: [],
  withVideo: false,
}

export const useUsersCardsFiltersStore = create<UsersCardsFilters>(() => DEFAULT_VALUES)

export const usersCardsFiltersActions: UsersCardsFiltersActions = {
  update: (value: Partial<UsersCardsFilters>) =>
    useUsersCardsFiltersStore.setState(() => ({ ...DEFAULT_VALUES, ...value })),
}
