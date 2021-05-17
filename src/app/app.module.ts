import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ExploreDiamondComponent } from './explore-diamond/explore-diamond.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RelatedProductComponent } from './related-product/related-product.component';
import { CartComponent } from './cart/cart.component';
import { BillingComponent } from './billing/billing.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { PaymentComponent } from './payment/payment.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { WishlistComponent } from './wishlist/wishlist.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material/material.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordChangedComponent } from './password-changed/password-changed.component';
import { PasswordEmailComponent } from './password-email/password-email.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ExploreDiamondComponent,
    ProductDetailsComponent,
    RelatedProductComponent,
    CartComponent,
    BillingComponent,
    PaymentComponent,
    OrderCompletedComponent,
    OrderDetailsComponent,
    WishlistComponent,
    MyOrdersComponent,
    ProfileComponent,
    ResetPasswordComponent,
    PasswordChangedComponent,
    PasswordEmailComponent,
    EmailVerificationComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSliderModule,
    Ng2TelInputModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
