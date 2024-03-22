import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  forgotvalidate:any;

  constructor(private route:Router,private form:FormBuilder,private service:CredentialsService){
    this.forgotvalidate=form.group({
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      password:['',[Validators.required,Validators.pattern('^.{8,}$')]],
      confirmpassword:['',[Validators.required]]
    })
  }

  forgotPage(){

  }

  loginpage(){
    this.route.navigateByUrl("login")
  }

  forgotSubmit(){
    if(this.forgotvalidate.controls['password'].value==this.forgotvalidate.controls['confirmpassword'].value){
      this.service.changePassword(this.forgotvalidate.value);
    }
    else{
      alert("Password does not match");
    }
  }
}
