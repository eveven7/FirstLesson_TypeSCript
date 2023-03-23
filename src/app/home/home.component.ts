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
  payments: any[] = [
    { name: 'clothes', amount: 5000, desciption: 'winter season' },
    { name: 'restaurant', amount: 50, desciption: 'friday evening' },
    { name: 'food', amount: 52, desciption: 'month budget' },
    { name: 'rent', amount: 500, desciption: 'July flat rent' }

  ]
  handleChildClick(mouseEvent: Person) {
    console.log('handleChildClick', mouseEvent);
  }

}