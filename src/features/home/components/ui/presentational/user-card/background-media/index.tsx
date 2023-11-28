'use client'

import { SyntheticEvent } from 'react'
import Image from 'next/image'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type BackgroundMediaProps = {
  avatar: UserCardEntity['avatar']
  medias?: UserCardEntity['medias']
  withVignette?: boolean
}

export const BackgroundMedia = ({ avatar, medias, withVignette = true }: BackgroundMediaProps) => {
  const handleError = (evt: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log({ evt, avatar })
  }

  if (!avatar) return null

  return (
    <>
      <Image
        alt="img-media"
        blurDataURL={avatar.placeholder}
        className="object-cover object-top"
        onError={handleError}
        placeholder="blur"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={avatar.hq}
        fill
      />
      {withVignette && <div className="vignette" />}
    </>
  )
}
