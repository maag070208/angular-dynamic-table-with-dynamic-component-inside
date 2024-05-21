import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { TableHeader } from './models/table.model';
import { StatusComponent } from './components/status/status.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // her we make a table with 10 users
  public datTable: User[] = Array.from({ length: 10 }).map((_, index) => ({
    name: `User${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `+1 555 555 555${index}`,
    status:
      index % 3 === 0 ? 'active' : index % 3 === 1 ? 'inactive' : 'pending',
  }));

  // here we make the table headers and define the columns we want to show
  public headers: TableHeader[] = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    // uncomment this line to phone column
    // { field: 'phone', header: 'Phone' },
    {
      field: 'status',
      header: 'Status',
      body: StatusComponent,
      columnType: 'component',
    },
  ];

  ngOnInit(): void {
    // here we add a new user to the table
    this.datTable.push({
      name: 'Martin Amaro',
      email: 'maag070208@gmail.com',
      phone: '+52 664 510 26 32',
      status: undefined,
    });
  }
}
