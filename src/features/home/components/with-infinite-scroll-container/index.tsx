'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import LoadMore from './load-more'

export type TWithInfiniteScrollFetchDataProps<T> = {
  Component: React.FC<{ data: T[] }>
  fetchFunction: (props: { page?: string | number; limit?: string | number }) => Promise<T[]>
}

export function withInfiniteScrollFetchData<T>({
  Component,
  fetchFunction,
}: TWithInfiniteScrollFetchDataProps<T>) {
  return function InfiniteScrollContainer({
    search,
    initialData = [],
  }: {
    initialData?: T[]
    search?: string
  }) {
    const [data, setData] = useState<T[]>(initialData)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const loadingMoreRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(loadingMoreRef)

    async function fetchMoreData() {
      setIsLoading(true)

      const next = page + 1
      const newData = await fetchFunction({
        page: next,
        limit: 10,
      })

      if (newData?.length) {
        setPage(next)
        setData((prev) => [...prev, ...newData])
      }

      setIsLoading(false)
    }

    useEffect(() => {
      if (isInView && !isLoading) fetchMoreData()
    }, [isInView, isLoading])

    return (
      <>
        <Component data={data} />

        <LoadMore ref={loadingMoreRef} isLoading={isLoading} />
      </>
    )
  }
}
