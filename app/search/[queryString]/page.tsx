"use client"
import SearchAndFilter from "@/components/pages/SearchQuery/SearchAndFilter/SearchAndFilter";
import SearchResultsSection from "@/components/pages/SearchQuery/SearchResultsSection/SearchResultsSection";
import { LeiRecordParamsType } from "@/store/api/glief/LeiRecords.types";
import { useParams } from "next/navigation";
import { useState } from "react";

export type SelectedFilterType = {
  filterType: string,
  value: string
}


const SearchPage = () => {
  const { queryString } = useParams();
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterType>({
    filterType: "",
    value: "",
  });
  const handleSelectChange = (name:string, value:string) => {

    setSelectedFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log('selectedFilter', selectedFilter)

  const query = {
    searchTerm: queryString,
    ...(selectedFilter.filterType === "country" && {
      countryCode: selectedFilter.value,
    }),
  };

  console.log('query is ----->', query)

  return (
    <>
      <SearchAndFilter
        queryString={queryString as string}
        onSelectChange={handleSelectChange}
        selectedFilter={selectedFilter}
      />
      <SearchResultsSection query={query as LeiRecordParamsType} />
    </>
  );
};

export default SearchPage;
