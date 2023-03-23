import { Component, Input } from '@angular/core';
import { Payment } from '../types/payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  @Input() payment: Payment;
  constructor(){}
}
