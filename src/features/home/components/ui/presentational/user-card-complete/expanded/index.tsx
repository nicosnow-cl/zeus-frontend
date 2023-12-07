import * as UserCardFull from '../../user-card-full'

export type ExpandedProps = UserCardFull.TitleProps &
  UserCardFull.DescriptionProps &
  UserCardFull.FooterProps

export default function Expanded({
  age,
  avatar,
  description,
  name,
  nationality,
  rrss,
  services,
  username,
}: ExpandedProps) {
  return (
    <UserCardFull.Root className="absolute bottom-[-600px] transition-[bottom] group-data-[expanded=true]:bottom-0">
      <UserCardFull.Content>
        <UserCardFull.Title age={age} avatar={avatar} name={name} username={username} />

        <UserCardFull.Description description={description} />

        <UserCardFull.Footer nationality={nationality} rrss={rrss} services={services} />
      </UserCardFull.Content>
    </UserCardFull.Root>
  )
}
