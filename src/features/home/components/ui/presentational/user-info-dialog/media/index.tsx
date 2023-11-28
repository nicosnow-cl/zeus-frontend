import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { BackgroundMedia } from '../../user-card'

export type MediaProps = {
  avatar: UserCardEntity['avatar']
  medias?: UserCardEntity['medias']
}

export const Media = ({ avatar }: MediaProps) => {
  return (
    <div className="absolute left-0 top-[-400px] h-[400px] w-full border">
      <BackgroundMedia avatar={avatar} />
    </div>
  )
}
