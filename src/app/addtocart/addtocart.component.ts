import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CurrencyPipe } from '@angular/common';
import { CredentialsService } from '../credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CurrencyPipe],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {
  prodval:any;
  parseval:any;
  products:any;
  deleteproduct:any;
  parsedelete:any;
  splicedata:any;
  stringsession:any;
  finalbook:any;
  parsefinal:any;
  constructor(private service:CredentialsService,private route:Router){
    if(sessionStorage.getItem('product')){
      this.prodval=sessionStorage.getItem('product');
      this.parseval=JSON.parse(this.prodval);
      this.products=this.parseval;
      console.log(this.products);
    }
  }

  bookNow(){
    this.finalbook=sessionStorage.getItem('product');
    this.parsefinal=JSON.parse(this.finalbook);
    this.service.productBook(this.parsefinal);
  }
  deletebook(index:any,proname:any){
    this.deleteproduct=sessionStorage.getItem('product');
    this.parsedelete=JSON.parse(this.deleteproduct);
    if(this.parsedelete.length>1){
     this.splicedata= this.parsedelete.splice(index,1);
     console.log(this.splicedata);
      this.stringsession=JSON.stringify(this.parsedelete);
     sessionStorage.setItem('product',this.stringsession);
      this.route.navigateByUrl('addtocart').then(()=>{
        window.location.reload();
      })
    }
    else{
      sessionStorage.removeItem('product');
      this.route.navigateByUrl('').then(()=>{
        window.location.reload();
      })
    }
    // sessionStorage.setItem('product',proname);

  }
}
