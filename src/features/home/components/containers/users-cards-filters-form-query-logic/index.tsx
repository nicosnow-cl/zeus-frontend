'use client'

import { memo } from 'react'

import { UsersCardsFiltersForm } from '../../forms/users-cards-filters-form'
import { WithUsersCardsQueryLogic } from '@/features/home/hocs/with-users-cards-query-logic'

export const UsersCardsFiltersFormQueryLogic = memo(
  WithUsersCardsQueryLogic({
    Component: UsersCardsFiltersForm,
  })
)
