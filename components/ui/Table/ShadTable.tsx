import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ShadTablePropType } from "./table.types";
import "./table.scss"


const ShadTable = <T,>({ caption, columns, data }: ShadTablePropType<T>) => {
    return (
        <div className="shadTable__wrapper">
            <Table>
                <TableCaption>{caption}</TableCaption>
                <TableHeader className="header">
                    <TableRow>
                        {columns.map(({ key, label }) => (
                            <TableHead
                                key={String(key)}
                                className="head"
                            >
                                {label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length ? (
                        data.map((row, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                className="row"
                            >
                                {columns.map(({ key, render }) => (
                                    <TableCell
                                        key={String(key)}
                                        className="cell"
                                    >
                                        {/* Use render function if provided, otherwise default to row[key] */}
                                        {render ? render(row, rowIndex) : (row[key] as React.ReactNode)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ShadTable;
