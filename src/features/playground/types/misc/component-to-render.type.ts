export type ComponentToRender<T> = {
  Component: T
  props?: { key: string; type: string; values: unknown[] }[]
  otherProps?: {
    [key: string]: unknown
  }
}
