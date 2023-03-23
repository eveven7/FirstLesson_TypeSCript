import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Payment } from '../types/payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit{
  @Input() payment: Payment;
  constructor() { }

  payments: any[] = [
    { name: 'clothes', amount: 5000, desciption: 'winter season' },
    { name: 'restaurant', amount: 50, desciption: 'friday evening' },
    { name: 'food', amount: 52, desciption: 'month budget' },
    { name: 'rent', amount: 500, desciption: 'July flat rent' }

  ]
  ngOnInit(): void {
  }
}
