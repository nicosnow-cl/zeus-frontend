import { Separator } from '@radix-ui/themes'
import * as UserCardFull from '../../user-card-full'

export type ExpandedProps = UserCardFull.HeaderProps &
  UserCardFull.BodyProps &
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
        <UserCardFull.Header />

        <Separator my="2" size="2" />

        <UserCardFull.Body
          age={age}
          avatar={avatar}
          description={description}
          name={name}
          username={username}
        />

        <Separator my="2" className="ml-auto mr-0" size="2" />

        <UserCardFull.Footer nationality={nationality} rrss={rrss} services={services} />
      </UserCardFull.Content>
    </UserCardFull.Root>
  )
}
