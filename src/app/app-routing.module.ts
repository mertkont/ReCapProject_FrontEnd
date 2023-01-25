import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { UpdateColorComponent } from './components/update-color/update-color.component';
import { UserComponent } from './components/user/user.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/cardetails/:carId", component:CarDetailComponent},
  {path:"cart", component:CartComponent},
  {path:"payment", component:PaymentComponent},
  {path:"car-add", component:CarAddComponent},
  {path:"brand-add", component:BrandAddComponent},
  {path:"color-add", component:ColorAddComponent},
  {path:"colors/update/:colorId",component:UpdateColorComponent},
  {path:"brands/update/:brandId",component:UpdateBrandComponent},
  {path:"cars/update/:id",component:UpdateCarComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"user", component:UserComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
