import { create } from 'zustand'

export type UI = {
  showNavbar: boolean
}

export type UIActions = {
  toggleNavbar: (newValue?: boolean) => void
}

export const useUiStore = create<UI>(() => ({
  showNavbar: true,
}))

export const uiActions: UIActions = {
  toggleNavbar: (newValue?: boolean) =>
    useUiStore.setState((state) => ({
      showNavbar: typeof newValue !== 'undefined' ? newValue : !state.showNavbar,
    })),
}
