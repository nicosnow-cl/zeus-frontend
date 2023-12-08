import { Button } from '@radix-ui/themes'
import clsx from 'clsx'

import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon, WhatsappIcon } from '@/common/icons'
import { SocialNetwork } from '@/common/types/entities/misc/social-network.type'

export type SocialNetworksGroupProps = {
  buttonProps?: Omit<React.ComponentProps<typeof Button>, 'children'>
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  rrss: SocialNetwork[]
}

export const SocialNetworksGroup = ({
  buttonProps,
  containerProps,
  rrss,
}: SocialNetworksGroupProps) => {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('flex gap-1', className)

  const getRRSSButton = (rrss: SocialNetwork, idx: number) => {
    switch (rrss.type) {
      case 'facebook':
        return (
          <Button key={idx} color="blue" asChild {...buttonProps}>
            <a href={rrss.url} target="_blank">
              <FacebookIcon />
            </a>
          </Button>
        )
      case 'instagram':
        return (
          <Button key={idx} color="pink" asChild {...buttonProps}>
            <a href={rrss.url} target="_blank">
              <InstagramIcon />
            </a>
          </Button>
        )
      case 'threads':
        return (
          <Button key={idx} asChild {...buttonProps}>
            <a href={rrss.url} target="_blank">
              Threads
            </a>
          </Button>
        )
      case 'twitter':
        return (
          <Button key={idx} color="cyan" asChild {...buttonProps}>
            <a href={rrss.url} target="_blank">
              <TwitterIcon />
            </a>
          </Button>
        )
      case 'tiktok':
        return (
          <Button key={idx} color="gray" asChild {...buttonProps}>
            <a href={rrss.url} target="_blank">
              <TiktokIcon />
            </a>
          </Button>
        )
      case 'whatsapp':
        return (
          <Button key={idx} color="green" asChild {...buttonProps}>
            <a href={rrss.url} target="_blank">
              <WhatsappIcon />
            </a>
          </Button>
        )
      default:
        return null
    }
  }

  return (
    <div {...restContainerProps} className={classes}>
      {rrss.map((rrss, idx) => getRRSSButton(rrss, idx))}
    </div>
  )
}
