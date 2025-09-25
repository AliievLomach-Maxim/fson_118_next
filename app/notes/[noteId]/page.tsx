// SSR
import { getSingleNote } from '@/lib/api'
import DetailsPageClient from './DetailsPage.client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

interface Props {
  params: Promise<{ noteId: string }>
}
const Details = async ({ params }: Props) => {
  const { noteId } = await params
  // const note = await getSingleNote(noteId)

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => getSingleNote(noteId),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailsPageClient />
    </HydrationBoundary>
  )
}

export default Details
