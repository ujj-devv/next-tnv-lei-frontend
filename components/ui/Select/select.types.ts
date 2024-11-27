
export type SelectItem = {
  value:string
  label:string
}

export type ShadSelectOptionsType = {
  placeholder?: string,
  options:SelectItem[],
  label:string
  onChange:(value: string) => void
  value:string
  required?:boolean
}
