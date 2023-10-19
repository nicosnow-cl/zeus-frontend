import { Box } from '@radix-ui/themes'

import { RootProps } from '@/common/types/components/desktop-navbar.type'

export const Root = ({ children }: RootProps) => {
  return (
    <Box className={`z-30`} position="fixed" width="100%">
      {children}
    </Box>
  )
}
