import { Box } from '@radix-ui/themes'

import { AvatarWithName } from '@/common/components/ui/presentational/avatar-with-name'
import { BodyProps } from '@/features/home/types/components/user-card-props.type'

export const Body = ({ avatar, name, username, age }: BodyProps) => {
  return (
    <Box className="h-[600px] text-woodsmoke-50">
      <AvatarWithName avatar={avatar} name={name} username={username} age={age} withDropShadow />
    </Box>
  )
}
