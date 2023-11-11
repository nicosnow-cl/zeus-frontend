import { redirect } from 'next/navigation'

import { Routes } from '@/common/enums/routes'

export default async function Root() {
  redirect(Routes.Home)
}
