import { Quicksand, Source_Code_Pro, Source_Sans_3 } from 'next/font/google'

const quickSand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand-google',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans-3',
})

export const fonts = [quickSand, sourceCodePro, sourceSans3]
