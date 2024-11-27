export type SearchBarPropType = {
    placeholder?:string,
    value?:string,
    customClass?:string,
    onClick:() => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}