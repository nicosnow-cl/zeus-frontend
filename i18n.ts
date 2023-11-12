import { getRequestConfig } from 'next-intl/server'

import { getMessages } from './intl/getMessages'
import { Locale } from '@config/enums'

export default getRequestConfig(async ({ locale }) => ({
  messages: await getMessages(locale as Locale),
}))
