'use client'

import { memo } from 'react'

import { CardsContainer } from '../cards-container'
import { fetchUsers } from '../../actions/users/fetch-users'
import { withInfiniteScrollFetchData } from '../with-infinite-scroll-container'

export const CardsContainerInfiniteScroll = withInfiniteScrollFetchData({
  Component: memo(CardsContainer),
  fetchFunction: fetchUsers,
})
