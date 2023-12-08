import { SyntheticEvent } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type MediaProps = {
  avatar: UserCardEntity['avatar']
  containerProps?: Partial<React.ComponentProps<typeof Image>>
  medias?: UserCardEntity['medias']
  withVignette?: boolean
}

export function Media({ avatar, containerProps, medias, withVignette }: MediaProps) {
  const { className, ...imgProps } = containerProps ?? {}

  const classes = clsx('object-cover object-top', className)

  const handleError = (evt: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log({ evt, avatar })
  }

  return (
    <Image
      alt="img-media"
      blurDataURL={avatar.placeholder}
      className={classes}
      fill
      onError={handleError}
      placeholder="blur"
      quality={75}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      src={avatar.hq}
      {...imgProps}
    />
  )
}
