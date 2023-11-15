import { create } from 'zustand'

export type UsersFilters = {
  nameUsername: string
  appearance: string[]
  services: string[]
  withVideo: boolean
  hasPromo: boolean
}

export type UsersFiltersActions = {
  update: (newValue: Partial<UsersFilters>) => void
}

export const DEFAULT_VALUES: UsersFilters = {
  nameUsername: '',
  appearance: [],
  services: [],
  withVideo: false,
  hasPromo: false,
}

export const useUsersFiltersStore = create<UsersFilters>(() => DEFAULT_VALUES)

export const usersFiltersActions: UsersFiltersActions = {
  update: (value: Partial<UsersFilters>) => useUsersFiltersStore.setState(() => value),
}
