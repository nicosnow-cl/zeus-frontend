import { useState } from 'react'
import { Badge, Flex, Heading, Separator, Text, Theme } from '@radix-ui/themes'

import { AvatarWithName } from '@/common/components/ui/others/avatar'
import { AppearanceGroup } from '../appearance-group'
import {
  Arrow90degRightIcon,
  PatchCheckFillIcon,
  ShareFillIcon,
  SuitHeartFillIcon,
} from '@/common/icons'
import { Button } from '@/shadcn-components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shadcn-components/ui/dialog'
import { ServicesGroup } from '../services-group'
import { SocialNetworksGroup } from '../social-networks-group'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

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

  if (!data) return null

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
              <div className="mb-2">
                <Flex justify="between" align="center">
                  <Flex gap="2">
                    <Badge
                      className="px-2 py-1 text-3"
                      radius="full"
                      variant="surface"
                      highContrast
                    >
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

                  <Flex gap="2">
                    <Button>
                      Ver perfil
                      <Arrow90degRightIcon className="ml-2" />
                    </Button>
                    <Button>
                      Compartir
                      <ShareFillIcon className="ml-2" />
                    </Button>
                  </Flex>
                </Flex>

                <Separator my="3" size="2" />

                <AvatarWithName
                  avatar={data.avatar}
                  name={data.name}
                  age={data.age}
                  username={data.username}
                  showUserType={false}
                  showAvatar
                  showUsername
                />
              </div>
            </DialogTitle>

            <DialogDescription>
              <Text className="italic" size="2">
                {data.description}
              </Text>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Flex className="mt-4 w-full" justify="between" gap="5">
              {data?.rrss && data.rrss.length > 0 && <SocialNetworksGroup rrss={data.rrss} />}

              <div>
                <AppearanceGroup nationality={data.nationality} flexProps={{ className: 'mb-2' }} />

                {data.services.length > 0 && <ServicesGroup services={data?.services} />}
              </div>
            </Flex>
          </DialogFooter>
        </Theme>
      </DialogContent>
    </Dialog>
  )
}
