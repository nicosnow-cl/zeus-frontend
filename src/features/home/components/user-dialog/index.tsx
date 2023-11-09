'use client'

import { useState } from 'react'
import { Badge, Flex, Separator, Text, Theme } from '@radix-ui/themes'

import { AvatarWithName } from '@/common/components/ui/others/avatar-with-name'
import { AppearanceGroup } from '../appearance-group'
import {
  Arrow90degRightIcon,
  CaretLeftFillIcon,
  CaretRightFillIcon,
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
  data: UserCardEntity | null
  onLeftClick?: () => void
  onOpenChange?: (open: boolean) => void
  onRightClick?: () => void
  open?: boolean
}

export const UserDialog = ({
  data,
  onLeftClick,
  onOpenChange,
  onRightClick,
  open: externalOpen,
}: TUserDialogProps) => {
  const isControlled = typeof externalOpen != 'undefined'

  const [internalOpen, setInternalOpen] = useState(isControlled ? externalOpen : false)

  const open = isControlled ? externalOpen : internalOpen

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) onOpenChange(open)
    if (!isControlled) setInternalOpen(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        {data !== null && (
          <>
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
                          <ShareFillIcon />
                        </Button>
                        <Button>
                          Ver perfil
                          <Arrow90degRightIcon className="ml-2" />
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
                    <AppearanceGroup
                      nationality={data.nationality}
                      flexProps={{ className: 'mb-2' }}
                    />

                    {data.services.length > 0 && <ServicesGroup services={data?.services} />}
                  </div>
                </Flex>
              </DialogFooter>
            </Theme>

            {onLeftClick && (
              <Button
                size="icon"
                onClick={onLeftClick}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <CaretLeftFillIcon />
              </Button>
            )}
            {onRightClick && (
              <Button
                onClick={onRightClick}
                size="icon"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '0',
                  transform: 'translate(50%, -50%)',
                }}
              >
                <CaretRightFillIcon />
              </Button>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
