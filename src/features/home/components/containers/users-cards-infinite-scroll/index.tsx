'use client'

import { memo } from 'react'

import { fetchUsers } from '@/features/home/actions/users/fetch-users'
import { UsersCardsContainerV2 } from '../users-cards-v2'
import { withInfiniteScrollFetchData } from '@/features/home/hocs/with-infinite-scroll-container'

export const UsersCardsInfiniteScrollContainer = withInfiniteScrollFetchData({
  Component: memo(UsersCardsContainerV2),
  fetchFunction: fetchUsers,
})
