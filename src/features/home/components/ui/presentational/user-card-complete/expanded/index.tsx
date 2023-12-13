import * as Separator from '@radix-ui/react-separator'
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
    <UserInfo.Root className="absolute -bottom-full left-0 transition-[bottom] duration-300 group-data-[expanded=true]:bottom-0">
      <UserInfo.Content className="bg-shade-100/80 backdrop-blur-sm dark:bg-shade-950/90">
        <UserInfo.Header likes={likes} type={type} />

        <Separator.Root className="my-2" />

        <UserInfo.Body
          age={age}
          avatar={avatar}
          description={description}
          name={name}
          username={username}
          nationality={nationality}
        />

        <Separator.Root className="ml-auto mr-0" />

        <UserInfo.Footer rrss={rrss} services={services} type={type} />
      </UserInfo.Content>
    </UserInfo.Root>
  )
}
