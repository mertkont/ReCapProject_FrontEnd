import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { VatAddedPipe } from './components/pipes/vat-added.pipe';
import { FilterPipePipe } from './components/pipes/filter-pipe.pipe';

import { Toast, ToastrModule } from 'ngx-toastr';
import { FilterPipeBrandPipe } from './components/pipes/filter-pipe-brand.pipe';
import { FilterPipeColorPipe } from './components/pipes/filter-pipe-color.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { UpdateColorComponent } from './components/update-color/update-color.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterInterceptor } from './interceptors/register.interceptor';
import { PaymentSummaryComponent } from './components/payment-summary/payment-summary.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    FilterPipeBrandPipe,
    FilterPipeColorPipe,
    CartSummaryComponent,
    CartComponent,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    UpdateBrandComponent,
    UpdateCarComponent,
    UpdateColorComponent,
    RegisterComponent,
    LoginComponent,
    PaymentSummaryComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:RegisterInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
