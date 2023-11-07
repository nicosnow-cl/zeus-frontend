import { Philosopher, Poppins } from 'next/font/google'

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-heading',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-default',
})

export const fonts = [poppins, philosopher]
