import { ColumnType } from "../types/column.types";
// define the table header interface
export interface TableHeader {
  field: string;
  header: string;
  body?: any;
  columnType?: ColumnType;
}
