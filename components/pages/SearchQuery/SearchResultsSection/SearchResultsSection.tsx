import Layout from "@/components/global/Layout/Layout";
import ShadTable from "@/components/ui/Table/ShadTable";
import { useGetLeiRecordsQuery } from "@/store/api/glief/lei-records.slice";
import { LeiRecord, LeiRecordParamsType } from "@/store/api/glief/LeiRecords.types";
import { useState } from "react";
import { LeiRowData } from "./search-results.types";
import { leiColumns } from "./search-results.data";


const SearchResultsSection = ({ query }: { query: LeiRecordParamsType }) => {
    const { data, error, isLoading } = useGetLeiRecordsQuery(query);
    console.log('data, error, isLoading, searchedData from api', data, error, isLoading, query);
    // const navigate = useNavigate();

    

    const simplifyLeiRecords = (records: LeiRecord[]) => {
        return records?.map(record => ({
            id: record.id,
            lei: record?.attributes?.lei,
            legalName: record?.attributes?.entity?.legalName?.name,
            status: record?.attributes?.entity?.status,
            country: record?.attributes?.entity?.legalAddress?.country,
        }));
    };

    const findRecordWithLeiId = (records: LeiRecord[], id: string): LeiRecord | undefined => {
        return records.find((record) => record.id === id);
    };



    // const handleRowClick = (row: LeiTableDataType) => {
    //     const fullRecord = findRecordWithLeiId(data?.data as LeiRecord[], row.lei);
    //     navigate(`/view/${row.lei}`, { state: { rowData: fullRecord } });
    // };

 

    return (
        <Layout>
            <div className="m-16 ">
                <ShadTable<LeiRowData>
                    columns={leiColumns} 
                    data={simplifyLeiRecords(data?.data as LeiRecord[]) || []}
                />
            </div>
        </Layout>
    );
};

export default SearchResultsSection;
