'use client'

import { getSingleNote } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

const DetailsPageClient = () => {
  const { noteId } = useParams<{ noteId: string }>()

  const { data } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => getSingleNote(noteId),
    refetchOnMount: false,
  })

  return (
    <div>
      <h1>Data client page</h1>
      {data && (
        <>
          <p>title: {data.title}</p>
          <p>content: {data.content}</p>
          <p>categoryId: {data.categoryId}</p>
        </>
      )}
    </div>
  )
}

export default DetailsPageClient
