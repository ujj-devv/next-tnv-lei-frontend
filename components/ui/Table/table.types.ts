import { ReactNode } from "react";

export type ColumnDef<TData> = {
    key: keyof TData;
    label: string;
    render?: (row: TData, rowIndex: number) => ReactNode;
  };
  
  export type ShadTablePropType<TData> = {
    caption?: string;
    columns: ColumnDef<TData>[];
    data: TData[];
  };
  