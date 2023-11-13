import { create } from 'zustand'

export const useUiStore = create(() => ({
  showNavbar: true,
}))

export const toggleNavbar = (newValue?: boolean) =>
  useUiStore.setState((state) => ({
    showNavbar: typeof newValue !== 'undefined' ? newValue : !state.showNavbar,
  }))
