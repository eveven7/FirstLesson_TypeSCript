import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})


export class PersonInfoComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() personAttribute: Person;

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
