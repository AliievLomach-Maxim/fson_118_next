import { DraftNote } from '@/types/note'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DraftNoteStore {
  note: DraftNote | null
  secretValue: 1
  saveNote: (note: DraftNote) => void
  //   updateNote: (note: Note) => void
  clearStore: () => void
}

export const useDraftNote = create<DraftNoteStore>()(
  persist(
    (set) => ({
      secretValue: 1,
      note: null,
      saveNote: (note: DraftNote) => set((prevState) => ({ note: { ...prevState.note, ...note } })),
      //
      //   updateNote: (updatedNote: Note) =>
      //     set((prevState) => ({ note: { ...prevState, ...updatedNote } })),
      //
      clearStore: () => set({ note: null }),
    }),
    { name: 'draft', partialize: (state) => ({ draft: state.note, val2: 'asd' }) }
  )
)

// const [noteState, setNoteState] = useState({
//   note: null,
// })

// const saveNote = (note: Note) => {
//   setNoteState({ note })
// }

// const updateNote = (updatedNote: Note) => {
//   setNoteState((prevState) => ({ note: { ...prevState, ...updatedNote } }))
// }
