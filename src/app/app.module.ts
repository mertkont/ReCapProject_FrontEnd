import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
