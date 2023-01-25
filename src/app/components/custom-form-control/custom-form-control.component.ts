import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent {
  quantity = 0;

  @Input()
  increment: number;

  onAdd() {
    this.quantity+= this.increment;
  }

  onRemove() {
    this.quantity-= this.increment;
  }
}