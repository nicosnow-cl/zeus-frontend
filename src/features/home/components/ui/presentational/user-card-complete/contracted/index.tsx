import * as UserCardSimple from '../../user-card-simple'

export type ContractedProps = UserCardSimple.MediaProps &
  UserCardSimple.HeaderProps &
  UserCardSimple.BodyProps

export function Contracted({
  age,
  avatar,
  description,
  hasPromo,
  likes,
  name,
  nationality,
  price,
  type,
}: ContractedProps) {
  return (
    <UserCardSimple.Root>
      <UserCardSimple.Media
        avatar={avatar}
        containerProps={{
          className:
            'transition-[transform] group-hover:scale-[1.03] group-focus-within:scale-[1.03] group-data-[expanded=true]:scale-[1.03]',
        }}
      />

      <UserCardSimple.Content className="transition-[opacity] duration-200 group-data-[expanded=true]:opacity-0">
        <UserCardSimple.Header likes={likes} nationality={nationality} type={type} />

        <UserCardSimple.Body
          age={age}
          containerProps={{
            className:
              'max-h-[2rem] group-hover:max-h-[600px] group-focus-within:max-h-[600px] transition-[max-height] duration-200',
          }}
          description={description}
          hasPromo={hasPromo}
          name={name}
          price={price}
        />
      </UserCardSimple.Content>
    </UserCardSimple.Root>
  )
}
