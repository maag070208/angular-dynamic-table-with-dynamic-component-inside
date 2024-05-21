import { CommonModule } from '@angular/common';
import { Component, Injector, Input, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  TableComponentProps,
  TableComponentTypes,
} from './table.component.types';
import { STATUS_INPUT } from 'src/app/input/status-input';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
// here we implement the TableComponentTypes interface
export class TableComponent implements OnInit, TableComponentTypes {
  // this implements the tableProps property
  @Input() tableProps: TableComponentProps = new TableComponentProps();

  protected displayedColumns: string[] = [];

  // define the injector property (this can be replaced with the constructor)
  private injector = inject(Injector);
  /* SOME LIKE THIS
    constructor(private injector: Injector) {}
  */

  ngOnInit(): void {
    // here we define the displayed columns with the fields of the headers
    this.displayedColumns = this.tableProps.headers.map(
      (header) => header.field
    );
  }
  // in this method we create the injector with the element that we want to use
  public createInjector = (element: any): Injector =>
    Injector.create({
      providers: [
        {
          //please note that the STATUS_INPUT is a token that we define in the status-input.ts file
          provide: STATUS_INPUT,
          // here we pass the element that we want to use
          useValue: element,
        },
      ],
      parent: this.injector,
    });
}
