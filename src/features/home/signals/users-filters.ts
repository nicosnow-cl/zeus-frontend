import { signal } from '@preact/signals'

export type TUsersFilters = {
  nameUsername: string
  appearance: string[]
  services: string[]
  withVideo: boolean
  hasPromo: boolean
}

export const DEFAULT_VALUES: TUsersFilters = {
  nameUsername: '',
  appearance: [],
  services: [],
  withVideo: false,
  hasPromo: false,
}

export const usersFilters = signal<TUsersFilters>(DEFAULT_VALUES)
