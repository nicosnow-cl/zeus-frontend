import { twMerge } from 'tailwind-merge'
import Image, { ImageProps } from 'next/image'

export type BannerProps = {
  containerProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>
  imageProps: Partial<ImageProps> & { src: string }
}

export function Banner({ containerProps, imageProps }: Readonly<BannerProps>) {
  const { className, ...restContainerProps } = containerProps ?? {}
  const { alt = 'a beautiful hero image', ...restImgProps } = imageProps || {}

  const classesContainer = twMerge('hero-banner', className)

  return (
    <div {...restContainerProps} className={classesContainer}>
      <Image {...restImgProps} alt={alt} fill priority />
    </div>
  )
}
