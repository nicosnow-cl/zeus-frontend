import { signal } from '@preact/signals'

export type TUsersFilters = {
  nameUsername: string
  appearance: string[]
  services: string[]
  withVideo: boolean
  hasPromo: boolean
}

export const usersFilters = signal<TUsersFilters>({
  nameUsername: '',
  appearance: [],
  services: [],
  withVideo: false,
  hasPromo: false,
})
