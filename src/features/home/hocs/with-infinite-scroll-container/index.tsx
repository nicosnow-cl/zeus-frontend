'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

import { PaginatedResponse } from '@/common/types/misc/paginated-response.type'
import { TSearchParams } from '@/common/types/misc/search-params.type'
import { LoadMore } from './load-more'

export type TWithInfiniteScrollFetchDataProps<T> = {
  Component: React.FC<{ data: T[] }>
  fetchFunction: (searchParams?: TSearchParams) => Promise<PaginatedResponse<T>>
}

export function withInfiniteScrollFetchData<T>({
  Component,
  fetchFunction,
}: TWithInfiniteScrollFetchDataProps<T>) {
  return function InfiniteScrollContainer({
    initialData = [],
    initialPage = 0,
    initialTotal = 0,
    query,
  }: {
    initialData?: T[]
    initialPage?: number
    initialTotal?: number
    query?: string
  }) {
    const [data, setData] = useState<T[]>(initialData)
    const [metadata, setMetadata] = useState({
      page: initialPage,
      total: initialTotal,
    })
    const [isLoading, setIsLoading] = useState(false)
    const loadingMoreRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(loadingMoreRef)

    const fetchMoreData = useCallback(async () => {
      setIsLoading(true)

      const nextPage = metadata.page + 1
      const res = await fetchFunction({
        page: nextPage.toString(),
        limit: '30',
        query,
      })

      if (res.status === 'error') return

      if (res.data.length) {
        setMetadata((prev) => ({ ...prev, page: nextPage, total: res.metadata.total }))
        setData((prev) => [...prev, ...res.data])
      }

      setTimeout(() => setIsLoading(false), 250)
    }, [metadata, query])

    useEffect(() => {
      if (isInView && !isLoading) fetchMoreData()
    }, [isInView, isLoading, fetchMoreData])

    return (
      <>
        <Component data={data} />

        {data.length < metadata.total && (
          <LoadMore
            ref={loadingMoreRef}
            className="order-last col-span-full grow basis-full"
            isLoading={isLoading}
          />
        )}
      </>
    )
  }
}
