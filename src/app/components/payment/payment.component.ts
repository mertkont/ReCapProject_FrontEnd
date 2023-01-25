import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  formVar: FormGroup;
  cards:Card[]=[{cardname:"Örnek", cardnumber:1234123412341234,cvv:123}];
  
  constructor(private fb: FormBuilder, private paymentService:PaymentService, private toastrService:ToastrService) {}

  ngOnInit() {
  }

  getCard(){
    this.cards = this.paymentService.list();
  }

  addTo(card:Card){
    this.toastrService.success("Kart kaydedildi", card.cardname);
    this.paymentService.addTo(card);
  }
}
