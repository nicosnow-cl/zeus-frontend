export interface IImage {
  dimensions?: { width: number; height: number }
  hq: string
  lq: string
  placeholder: string
  size?: number
  type?: string
}
