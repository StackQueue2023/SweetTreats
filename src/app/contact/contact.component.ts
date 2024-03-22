import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactform:any;

  constructor(private form:FormBuilder){
    this.contactform=form.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      phonenum:['',[Validators.required]],
      email:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }

  contactsubmit()
  {
    
  }
}
