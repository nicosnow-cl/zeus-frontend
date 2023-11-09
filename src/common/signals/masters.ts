import { signal } from '@preact/signals'

import { TMenuSelectOption } from '../types/misc/select-option'

export const appearances = signal<TMenuSelectOption[]>([])
export const services = signal<TMenuSelectOption[]>([])
