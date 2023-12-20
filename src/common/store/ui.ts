import { create } from 'zustand'

export type UI = {
  showNavbar: boolean
  changeTheme: boolean
}

export type UIActions = {
  toggleNavbar: (newValue?: boolean) => void
  toggleTheme: (newValue?: boolean) => void
}

export const useUiStore = create<UI>(() => ({
  showNavbar: true,
  changeTheme: false,
}))

export const uiActions: UIActions = {
  toggleNavbar: (newValue?: boolean) =>
    useUiStore.setState((state) => ({
      showNavbar: typeof newValue !== 'undefined' ? newValue : !state.showNavbar,
    })),
  toggleTheme: (newValue?: boolean) => {
    useUiStore.setState((state) => ({
      changeTheme: typeof newValue !== 'undefined' ? newValue : !state.changeTheme,
    }))
  },
}
