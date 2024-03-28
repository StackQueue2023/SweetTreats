import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { CredentialsService } from '../credentials.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registervalidate: any;
  changes:boolean=true;
  field:boolean=true;
  changesconfirm:boolean=true;
  field2:boolean=true;
  constructor(private form:FormBuilder,private route:Router,private service:CredentialsService) {
    this.registervalidate = form.group({
        username:['',[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
        email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]],
        password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
        confirmpassword:['',[Validators.required]]
      })
  }

  registerPage() {
    this.route.navigateByUrl('/register');
  }

  changeicon(){
    this.changes=!this.changes;
    this.field=!this.field;
  }

  changeiconconfirm(){
    this.changesconfirm=!this.changesconfirm;
    this.field2=!this.field2;
  }

  userRegister(){
    if(this.registervalidate.controls['password'].value==this.registervalidate.controls['confirmpassword'].value){
      console.log(this.registervalidate.value);
      this.service.getUserDetails(this.registervalidate.value);
    }
    else{
      alert("Password does not match");
    }

  }
}
