// SSR

import NoteList from '@/components/NoteList/NoteList'
import { getNotes } from '@/lib/api'
// Props{
//   queryParams:page
// }
// const Notes = () => {return <h1>Hello</h1>} // SSG
const Notes = async () => {
  const notes = await getNotes()

  // console.log('start promise')
  // await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
  // console.log('loaded')

  return (
    <div>
      {notes?.length > 0 && <NoteList items={notes} />}
      {/* <Link href='/notes?page=2'>2</Link> */}
    </div>
  )
}

export default Notes

// ('use client')

// import NoteList from '@/components/NoteList/NoteList'
// import { getNotes } from '@/lib/api'
// import { Note } from '@/types/note'
// import { useState } from 'react'

// const Notes = () => {
//   const [notes, setNotes] = useState<Note[]>([])

//   const handleClick = async () => {
//     try {
//       const res = await getNotes()
//       setNotes(res)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Get notes</button>
//       {notes?.length > 0 && <NoteList items={notes} />}
//     </div>
//   )
// }

// export default Notes
