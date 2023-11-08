import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shadcn-components/ui/dialog'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { Badge, Flex, Heading, Separator, Text, Theme } from '@radix-ui/themes'
import { PatchCheckFillIcon, SuitHeartFillIcon } from '@/common/icons'
import { Button } from '@/shadcn-components/ui/button'

export type TUserDialogProps = {
  onOpenChange?: (open: boolean) => void
  open?: boolean
  data?: UserCardEntity | null
}

export const UserDialog = ({ open: externalOpen, onOpenChange, data }: TUserDialogProps) => {
  const isControlled = typeof externalOpen != 'undefined'

  const [internalOpen, setInternalOpen] = useState(isControlled ? externalOpen : false)

  const open = isControlled ? externalOpen : internalOpen

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) onOpenChange(open)
    if (!isControlled) setInternalOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <Theme
          accentColor="gray"
          grayColor="slate"
          radius="full"
          scaling="90%"
          hasBackground={false}
        >
          <DialogHeader>
            <DialogTitle asChild>
              <Flex className="mb-3" direction="column">
                <Flex align="center" justify="between" gap="2" className="mb-1">
                  <Heading>
                    {data?.name}, {data?.age}
                  </Heading>

                  <div>
                    <Button size="sm">Ver perfil</Button>
                    <Button className="ml-2" size="sm">
                      Compartir
                    </Button>
                  </div>
                </Flex>

                <Flex gap="2" align="center">
                  <Text size="2" className="text-crimson-9">
                    @{data?.username}
                  </Text>

                  <Badge className="px-2 py-1 text-3" radius="full" variant="surface" highContrast>
                    <PatchCheckFillIcon /> VIP
                  </Badge>
                  <Badge
                    className="px-2 py-1 text-2"
                    color="tomato"
                    radius="full"
                    variant="surface"
                    highContrast
                  >
                    <SuitHeartFillIcon /> 2.6k
                  </Badge>
                </Flex>
              </Flex>
            </DialogTitle>

            <DialogDescription>{data?.description}</DialogDescription>
          </DialogHeader>

          <Separator my="5" size="4" />

          <div></div>
        </Theme>
      </DialogContent>
    </Dialog>
  )
}
