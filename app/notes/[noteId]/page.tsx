// SSR
import { getSingleNote } from '@/lib/api'
import DetailsPageClient from './DetailsPage.client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ noteId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { noteId } = await params
  const note = await getSingleNote(noteId)

  return {
    title: note.title,
    openGraph: {
      type: 'website',
      url: 'https://example.com',
      title: 'My Website',
      description: 'My Website Description',
      siteName: 'My Website',
      images: [{ url: 'https://example.com/og.png' }],
    },
  }
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
