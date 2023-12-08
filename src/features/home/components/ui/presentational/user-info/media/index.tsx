import { Media as UserMedia, MediaProps } from '../../user-card-simple'

export const Media = ({ avatar }: MediaProps) => {
  return (
    <div className="relative block">
      <UserMedia avatar={avatar} />
    </div>
  )
}
