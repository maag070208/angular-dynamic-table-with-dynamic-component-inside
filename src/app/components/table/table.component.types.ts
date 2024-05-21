import { TableHeader } from 'src/app/models/table.model';

/**
 * This is my way to work with the atomic components
 * First we define the types that we are going to use
 * Then we define the class that will contain the properties
 * that we are going to use in the component
 */

export interface TableComponentTypes {
  /* this is the way to define the properties that we are going to use in the component
  [tableProps]={
    headers: [
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
      { field: 'status', header: 'Status' },
    ],
    data: [
      { name: 'John Doe', email: '
  }
*/
  tableProps: TableComponentProps;
}

export class TableComponentProps {
  //properties
  datTable: any[] = [];
  headers: TableHeader[] = [];
}
