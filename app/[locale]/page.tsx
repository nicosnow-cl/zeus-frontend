import { redirect } from 'next/navigation'

import { Routes } from '@/common/enums'

export default async function Root() {
  redirect(Routes.Home)
}
