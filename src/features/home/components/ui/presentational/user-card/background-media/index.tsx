'use client'

import { SyntheticEvent } from 'react'
import Image from 'next/image'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type BackgroundMediaProps = {
  avatar: UserCardEntity['avatar']
  medias?: UserCardEntity['medias']
}

const scaleTransition = 'transition-all duration-150 ease-linear group-hover:scale-[1.05]'

export const BackgroundMedia = ({ avatar, medias }: BackgroundMediaProps) => {
  const handleError = (evt: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log({ evt, avatar })
  }

  if (!avatar) return null

  return (
    <>
      <Image
        alt="img-media"
        blurDataURL={avatar.placeholder}
        className={`h-[600px] object-cover ${scaleTransition}`}
        onError={handleError}
        placeholder="blur"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={avatar.hq as string}
        fill
      />
      <div className="vignette" />
    </>
  )
}
