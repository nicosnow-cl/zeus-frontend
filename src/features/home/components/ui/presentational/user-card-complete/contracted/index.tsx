import * as UserCardSimple from '../../user-card-simple'

export type ContractedProps = UserCardSimple.MediaProps &
  UserCardSimple.HeaderProps &
  UserCardSimple.BodyProps

export function Contracted({ age, avatar, description, name }: ContractedProps) {
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
        />

        <UserCardSimple.Body
          age={age}
          containerProps={{
            className:
              'max-h-[1.75rem] group-hover:max-h-[600px] transition-[max-height] duration-150',
          }}
          description={description}
          name={name}
        />
      </UserCardSimple.Content>
    </UserCardSimple.Root>
  )
}
