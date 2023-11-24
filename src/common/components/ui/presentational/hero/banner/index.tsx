import Image, { ImageProps } from 'next/image'

export type BannerProps = {
  containerProps?: Omit<React.ComponentProps<'div'>, 'children'>
  imageProps: Partial<ImageProps> & { src: string }
}

export const Banner = ({ containerProps, imageProps }: BannerProps) => {
  const { alt = 'a beautiful hero image', className = '', ...restImgProps } = imageProps

  return (
    <div
      className={`full-width bg-shade-950 ${containerProps?.className ?? ''}`}
      {...containerProps}
    >
      <Image alt={alt} fill {...restImgProps} className={`full-width hero-banner ${className}`} />
    </div>
  )
}
