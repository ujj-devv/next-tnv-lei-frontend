import { ColumnDef } from "@/components/ui/Table/table.types";
import { CdfRowData } from "./cdf.types";

export const columns: ColumnDef<CdfRowData>[] = [
  {
    key: "serialNumber",
    label: "S. NO",
    render: (_, rowIndex) => rowIndex + 1, // Render the row index + 1 as the serial number
  },
  { key: "date", label: "DATE" },
  { key: "leiRecordCount", label: "LEI-CDF" },
  { key: "rrCdfCount", label: "RR-CDF" },
  { key: "reCdfCount", label: "RE-CDF" },
];
