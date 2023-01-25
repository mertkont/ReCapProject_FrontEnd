import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Card } from '../models/card';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  addTo(card:Card){
    let item = Cards.find(c => c.cvv==card.cvv);
    if(item){
      item.cvv += 0;
    }else{
      let card = new Card();
      card.cardname = "Kart";
      card.cardnumber= parseFloat((<HTMLInputElement>document.getElementById("cardnumber")).value);;
      card.cvv=parseFloat((<HTMLInputElement>document.getElementById("cvv")).value);;
      Cards.push(card);
      console.log(Cards);
    }
  }

  list():Card[]{
    return Cards;
  }
}
