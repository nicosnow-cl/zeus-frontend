import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { BackgroundMedia } from '../../user-card'

export type MediaProps = {
  avatar: UserCardEntity['avatar']
  medias?: UserCardEntity['medias']
}

export const Media = ({ avatar }: MediaProps) => {
  return (
    <div className="relative block">
      <BackgroundMedia avatar={avatar} />
    </div>
  )
}
