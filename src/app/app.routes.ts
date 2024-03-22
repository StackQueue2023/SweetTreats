import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BookpageComponent } from './bookpage/bookpage.component';

export const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },
  {
    path: "login",
    component:LoginpageComponent
  },
  {
    path: "register",
    component:SignupComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"addtocart",
    component:AddtocartComponent
  },
  {
    path:"forgotpassword",
    component:ForgotpasswordComponent
  },
  {
    path:"orderconfirm",
    component:BookpageComponent
  }
];
