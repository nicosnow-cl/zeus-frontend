import { create } from 'zustand'

import { MenuSelectOption } from '../types/misc/select-option'

export type MasterData = {
  appearances: MenuSelectOption[]
  nationalities: MenuSelectOption[]
  services: MenuSelectOption[]
}

export type MasterDataActions = {
  setAppearances: (value: MenuSelectOption[]) => void
  setServices: (value: MenuSelectOption[]) => void
}

export const useMasterDataStore = create<MasterData>(() => ({
  appearances: [],
  nationalities: [],
  services: [],
}))

export const masterDataActions = {
  setAppearances: (value: MenuSelectOption[]) =>
    useMasterDataStore.setState(() => ({ appearances: value })),
  setServices: (value: MenuSelectOption[]) =>
    useMasterDataStore.setState(() => ({ services: value })),
  setNationalities: (value: MenuSelectOption[]) =>
    useMasterDataStore.setState(() => ({ nationalities: value })),
}
