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
  type,
  likes,
}: ExpandedProps) {
  return (
    <UserInfo.Root className="absolute bottom-[-600px] transition-[bottom] duration-300 group-data-[expanded=true]:bottom-0">
      <UserInfo.Content className="bg-shade-100/80 backdrop-blur-sm dark:bg-shade-950/90">
        <UserInfo.Header likes={likes} type={type} />

        <Separator my="2" size="2" />

        <UserInfo.Body
          age={age}
          avatar={avatar}
          description={description}
          name={name}
          username={username}
          nationality={nationality}
        />

        <Separator my="2" className="ml-auto mr-0" size="2" />

        <UserInfo.Footer rrss={rrss} services={services} type={type} />
      </UserInfo.Content>
    </UserInfo.Root>
  )
}
