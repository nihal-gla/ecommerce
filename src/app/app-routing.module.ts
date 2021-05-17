import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ExploreDiamondComponent } from './explore-diamond/explore-diamond.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordEmailComponent } from './password-email/password-email.component';
import { PasswordChangedComponent } from './password-changed/password-changed.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'explore', component: ExploreDiamondComponent
  },
  {
    path: 'product-details', component: ProductDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'billing', component: BillingComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'complete', component: OrderCompletedComponent
  },
  {
    path: 'order', component: OrderDetailsComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  },
  {
    path: 'myorder', component: MyOrdersComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'reset', component: ResetPasswordComponent
  },
  {
    path: 'email', component: PasswordEmailComponent
  },
  {
    path: 'changed', component: PasswordChangedComponent
  },
  {
    path: 'verification', component: EmailVerificationComponent
  },
  {
    path: 'terms', component: TermsConditionsComponent
  },
  {
    path: 'privacy', component: PrivacyPolicyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]