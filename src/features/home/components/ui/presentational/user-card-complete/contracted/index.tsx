import * as UserCardSimple from '../../user-card-simple'

export type ContractedProps = UserCardSimple.MediaProps &
  UserCardSimple.HeaderProps &
  UserCardSimple.BodyProps

export function Contracted({
  age,
  avatar,
  description,
  likes,
  name,
  nationality,
  type,
}: ContractedProps) {
  return (
    <UserCardSimple.Root>
      <UserCardSimple.Media
        avatar={avatar}
        containerProps={{
          className:
            'transition-[transform] group-hover:scale-[1.03] group-data-[expanded=true]:scale-[1.03]',
        }}
      />

      <UserCardSimple.Content>
        <UserCardSimple.Header
          containerProps={{
            className: 'group-data-[expanded=true]:opacity-0 transition-[opacity] duration-150',
          }}
          likes={likes}
          nationality={nationality}
          type={type}
        />

        <UserCardSimple.Body
          age={age}
          containerProps={{
            className:
              'max-h-[2rem] group-hover:max-h-[600px] transition-[max-height] duration-200',
          }}
          description={description}
          name={name}
          nationality={nationality}
        />
      </UserCardSimple.Content>
    </UserCardSimple.Root>
  )
}
