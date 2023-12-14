import { redirect } from '@intl/navigation'

import { Routes } from '@config/enums'

export default async function Root() {
  redirect(Routes.Home)
}
