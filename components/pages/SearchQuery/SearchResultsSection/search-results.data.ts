import { ColumnDef } from "@/components/ui/Table/table.types";
import { LeiRowData } from "./search-results.types";

export const leiColumns: ColumnDef<LeiRowData>[] = [
    {
      key: "lei",
      label: "LEI",
      render: (_, rowIndex) => rowIndex + 1, 
    },
    { key: "legalName", label: "Legal Name" },
    { key: "country", label: "Country" },
    { key: "status", label: "Status" },
  ];
  