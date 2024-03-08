import { Component } from '@angular/core';

type Usera = { name: string; age: number };

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  usersa = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 24 },
    { name: 'Paul', age: 26 },
    { name: 'Peter', age: 27 },
    { name: 'Mary', age: 23 },
  ] as Usera[];
}
