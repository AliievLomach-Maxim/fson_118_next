export interface Note {
  id: string
  title: string
  content: string
  categoryId: string
}
export interface NoteMeta {
  id: string
  title: string
  description: string
  ////...
}

export interface Category {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}
