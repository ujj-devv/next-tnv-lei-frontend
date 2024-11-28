import LargeHeader from "@/components/global/LargeHeader/LargeHeader";
import Layout from "@/components/global/Layout/Layout";
import { ShadButtonType } from "@/components/ui/Button/button.enums";
import ShadButton from "@/components/ui/Button/ShadButton";
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import ShadSelect from "@/components/ui/Select/ShadSelect";
import { useState } from "react";
import { FiFilter } from "react-icons/fi"
import countries from "@/lib/data/global/country.json"
import { SearchAndFilterPropType } from "./search-and-filter.types";
import { SelectItem } from "@/components/ui/Select/select.types";
import "./search-and-filter.scss"

export const filterTypesArray = [
    { label: "Country", value: "country" },
    { label: "LEI number", value: "lei" },
];



const SearchAndFilter = ({ queryString, onSelectChange, selectedFilter }: SearchAndFilterPropType) => {
    const [isFilter, setIsFilter] = useState(false);
    const [searchValue, setSearchValue] = useState(queryString)
    console.log('selectedFilter', selectedFilter)

    const countryArray: SelectItem[] = countries.map(({ name, countryCode }) => {
        return {
            label: name,
            value: countryCode
        }
    })

    return (
        <div className="bg-[#F3FAF8] mb-16">
            <Layout>
                <div className="mx-16 py-16 flex flex-col gap-8">
                    <div className="flex justify-center flex-col gap-4 md:justify-start">
                        <LargeHeader text={"Main LEI Search Page"} className="text-[#2A5B55]" />
                        <p className="text-[#9EA0A0] font-normal text-base">
                            Search for a Legal Entity Identifier number or code. Searches can be performed by LEI, Legal Name, Country, and several other values.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <div className="w-1/2">
                            <SearchBar
                                placeholder=""
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onClick={() => ""}
                            />
                        </div>
                        <div className="w-full md:w-1/12">
                            <ShadButton
                                buttonText={"Add Filter"}
                                type={ShadButtonType.PRIMARY}
                                icon={<FiFilter />}
                                onClick={() => setIsFilter(true)}
                            />
                        </div>


                        <div className="flex gap-4 flex-col md:flex-row">
                            {isFilter && (
                                <div className="w-full md:w-1/3">
                                    <ShadSelect
                                        options={filterTypesArray}
                                        label={"Filter Type"}
                                        onChange={(value) => onSelectChange("filterType", value)}
                                        value={selectedFilter.filterType}
                                    />
                                </div>


                            )}
                            {selectedFilter.filterType === "country" && (
                                <div className="w-full md:w-1/3">
                                    <ShadSelect
                                        options={countryArray}
                                        label={"Select Country"}
                                        onChange={(value) => onSelectChange("value", value)}
                                        value={selectedFilter.value}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default SearchAndFilter;
