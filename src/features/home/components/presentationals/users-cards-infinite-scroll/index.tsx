'use client'

import { fetchUsers } from '@/features/home/actions/users/fetch-users'
import { UsersCardsContainer } from '../users-cards'
import { withInfiniteScrollFetchData } from '@/features/home/hocs/with-infinite-scroll-container'

export const UsersCardsInfiniteScrollContainer = withInfiniteScrollFetchData({
  Component: UsersCardsContainer,
  fetchFunction: fetchUsers,
})