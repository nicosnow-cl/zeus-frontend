import { Separator } from '@radix-ui/themes'

import * as UserInfo from '../../user-info'

export type ExpandedProps = UserInfo.HeaderProps & UserInfo.BodyProps & UserInfo.FooterProps

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
    <UserInfo.Root className="absolute bottom-[-600px] transition-[bottom] group-data-[expanded=true]:bottom-0">
      <UserInfo.Content>
        <UserInfo.Header />

        <Separator my="2" size="2" />

        <UserInfo.Body
          age={age}
          avatar={avatar}
          description={description}
          name={name}
          username={username}
        />

        <Separator my="2" className="ml-auto mr-0" size="2" />

        <UserInfo.Footer nationality={nationality} rrss={rrss} services={services} />
      </UserInfo.Content>
    </UserInfo.Root>
  )
}
