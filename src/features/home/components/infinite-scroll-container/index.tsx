import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

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
    const [ref, inView] = useInView()
    const isFirstRender = useRef(true)
    const [isLoading, setIsLoading] = useState(false)

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
      if (isFirstRender.current) {
        isFirstRender.current = false
        return
      }
    }, [])

    useEffect(() => {
      if (isFirstRender.current) return

      if (inView && !isLoading) {
        setIsLoading(true)
        fetchMoreData()
      }
    }, [isFirstRender.current, isLoading, inView])

    return (
      <div>
        <Component data={data} />

        <div ref={ref}>Loading more data...</div>
      </div>
    )
  }
}
