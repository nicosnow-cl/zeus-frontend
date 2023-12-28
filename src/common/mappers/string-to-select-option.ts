import { MenuSelectOption } from '../types/misc/select-option'

export const stringToMenuOption = (string: string): MenuSelectOption => ({
  label: string,
  value: string,
})
