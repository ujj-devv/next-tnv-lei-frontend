import { SelectedFilterType } from "@/app/search/[queryString]/page"

export type SearchAndFilterPropType = {
    queryString: string,
    onSelectChange: (name:string, value: string) => void
    selectedFilter: SelectedFilterType
}