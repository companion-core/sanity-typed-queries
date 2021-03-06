interface MarkDefs {
  _key: string
  _type: string
  [key: string]: string
}

interface Children {
  _key: string
  _type: string
  marks: string[]
  text: string
}

export interface Block {
  _type: 'block'
  _key: string
  children: Children[]
  level?: number
  listItem?: string
  markDefs: MarkDefs[]
  style: string
}
