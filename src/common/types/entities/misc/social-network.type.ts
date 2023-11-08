export type SocialNetworkType =
  | 'facebook'
  | 'instagram'
  | 'threads'
  | 'tiktok'
  | 'twitter'
  | 'whatsapp'

export type SocialNetwork = {
  type: SocialNetworkType
  url: string
}
