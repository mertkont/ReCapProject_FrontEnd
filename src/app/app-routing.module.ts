import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/cardetails/:carId", component:CarDetailComponent},
  {path:"cart", component:CartComponent},
  {path:"payment", component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
