export interface Note {
  id: string
  title: string
  content: string
  categoryId: string
}

export interface Category {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}
