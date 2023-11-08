import { Button, Flex } from '@radix-ui/themes'

import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon, WhatsappIcon } from '@/common/icons'
import { SocialNetwork } from '@/common/types/entities/misc/social-network.type'

export type TSocialNetworksGroupProps = {
  rrss: SocialNetwork[]
  buttonProps?: Omit<React.ComponentProps<typeof Button>, 'children'>
  flexProps?: Omit<React.ComponentProps<typeof Flex>, 'children' | 'key'>
}

export const SocialNetworksGroup = ({
  rrss,
  buttonProps,
  flexProps,
}: TSocialNetworksGroupProps) => {
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
    <Flex direction="column" wrap="wrap" align="center" gap="2" {...flexProps}>
      {rrss.map((rrss, idx) => getRRSSButton(rrss, idx))}
    </Flex>
  )
}
