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
    <UserInfo.Root className="absolute inset-0 opacity-0 transition-opacity group-data-[expanded=true]:opacity-100">
      <UserInfo.Content className="h-full justify-end bg-shade-300/30 dark:bg-shade-950/40">
        <UserInfo.Header likes={likes} type={type} />

        <div className="flex flex-col gap-2 rounded-xl border border-gray-600/50 bg-gray-950/60 px-2 py-3 text-shade-50 backdrop-blur-sm">
          <UserInfo.Body
            age={age}
            avatar={avatar}
            description={description}
            name={name}
            username={username}
            nationality={nationality}
          />

          <Separator.Root className="separator-root max-w-[4rem]" />

          <UserInfo.Footer rrss={rrss} services={services} type={type} />
        </div>
      </UserInfo.Content>
    </UserInfo.Root>
  )
}
