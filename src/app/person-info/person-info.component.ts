import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})


export class PersonInfoComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() personAttribute: Person;
  @Output() onClick: EventEmitter<Person> = new EventEmitter<Person>();
  //mouseevent- event


  constructor() {
    console.log('constructor');
    console.log('atribute', this.personAttribute);
  }
  ngOnInit() {
    console.log('OnInit');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges', changes);
  }
}
