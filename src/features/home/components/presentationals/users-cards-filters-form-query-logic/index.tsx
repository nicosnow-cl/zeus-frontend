'use client'

import { memo } from 'react'

import { UsersCardsFiltersForm } from '../../containers/users-cards-filters-form'
import { withUsersCardsQueryLogic } from '@/features/home/hocs/with-users-cards-query-logic'

export const UsersCardsFiltersFormQueryLogic = memo(
  withUsersCardsQueryLogic({
    Component: UsersCardsFiltersForm,
  })
)
