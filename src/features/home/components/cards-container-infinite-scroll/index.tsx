'use client'

import { memo } from 'react'

import { CardsContainer } from '../cards-container'
import { fetchUsers } from '../../actions/fetchUsers'
import { withInfiniteScrollFetchData } from '../infinite-scroll-container'

export const CardsContainerInfiniteScroll = withInfiniteScrollFetchData({
  Component: memo(CardsContainer),
  fetchFunction: fetchUsers,
})
