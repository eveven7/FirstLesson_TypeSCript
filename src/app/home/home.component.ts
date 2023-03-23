import { Component } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  parentData: Person = { name: 'John', age: 25 };
  arrayData: Person[] = [{ name: 'John', age: 25 }, 
  { name: 'Tom', age: 30 }, 
  { name: 'Simon', age: 50 },
  { name: 'Minia', age: 42 }
  ];

  handleChildClick(mouseEvent: Person) {
    console.log('handleChildClick', mouseEvent);
  }

}