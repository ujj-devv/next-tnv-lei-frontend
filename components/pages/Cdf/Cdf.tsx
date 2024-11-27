import Layout from "@/components/global/Layout/Layout";
import ShadTable from "@/components/ui/Table/ShadTable";
import { useGetCdfsQuery } from "@/store/api/cdf/cdf";
import { CdfRowData } from "./cdf.types";
import { columns } from "./cdf.data";


function Cdf() {
  const { data } = useGetCdfsQuery();

  const rowData: CdfRowData[] = data?.data?.map(
    ({ date, leiRecordCount, reCdfCount, rrCdfCount }) => ({
      date,
      leiRecordCount,
      reCdfCount,
      rrCdfCount,
    })
  ) || [];

  return (
    <Layout customClass="p-4 md:p-24">
      <ShadTable<CdfRowData>
        columns={columns}
        data={rowData}
      />
    </Layout>
  );
}

export default Cdf;
