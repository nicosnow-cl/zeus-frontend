import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import Image from 'next/image'
import { SyntheticEvent } from 'react'

export type MediaProps = {
  avatar: UserCardEntity['avatar']
  imgProps?: React.ComponentProps<typeof Image>
  medias?: UserCardEntity['medias']
  withVignette?: boolean
}

export default function Media({ avatar, imgProps, medias, withVignette }: MediaProps) {
  const handleError = (evt: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log({ evt, avatar })
  }

  return (
    <>
      <Image
        alt="img-media"
        blurDataURL={avatar.placeholder}
        className="h-full object-cover object-top transition-[transform] group-hover:scale-[1.02] group-focus:scale-[1.02]"
        onError={handleError}
        placeholder="blur"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={avatar.hq}
        fill
        {...imgProps}
      />

      {/* {withVignette && (
        <div className="vignette opacity-100 transition-[opacity] group-hover:opacity-50" />
      )} */}
    </>
  )
}
