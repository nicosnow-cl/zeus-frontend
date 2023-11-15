import { create } from 'zustand'

import { TMenuSelectOption } from '../types/misc/select-option'

export type MasterData = {
  appearances: TMenuSelectOption[]
  services: TMenuSelectOption[]
}

export type MasterDataActions = {
  setAppearances: (value: TMenuSelectOption[]) => void
  setServices: (value: TMenuSelectOption[]) => void
}

export const useMasterDataStore = create<MasterData>(() => ({
  appearances: [],
  services: [],
}))

export const masterDataActions = {
  setAppearances: (value: TMenuSelectOption[]) =>
    useMasterDataStore.setState(() => ({ appearances: value })),
  setServices: (value: TMenuSelectOption[]) =>
    useMasterDataStore.setState(() => ({ services: value })),
}
