import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  shadoweffect:any;
  provideacess:boolean=true;
  getDetails:any;
  parsedDetails:any;
  product:any;
  getCart:any;
  showcart:boolean=true;
  routeshow:any='/login';

  constructor(private route:Router){
    if(sessionStorage.getItem('login')){
      if(sessionStorage.getItem('login')=="true"){
        this.routeshow='/products';
        this.provideacess=false;
        this.getDetails=sessionStorage.getItem('userDetails');
        this.parsedDetails=JSON.parse(this.getDetails);
        console.log(this.parsedDetails);
      }
    }
    else{
      this.provideacess=true;
      this.routeshow='/login';
    }

    if(sessionStorage.getItem('product')){
      this.product=sessionStorage.getItem('product');
      this.getCart=JSON.parse(this.product);
      if(this.getCart.length>0){
        this.showcart=false;
      }
    }

  }

  // productpage(){
  //   if(sessionStorage.getItem('login')){
  //     if(sessionStorage.getItem('login')=="true"){
  //       this.route.navigateByUrl('products');
  //     }
  //     else{
  //       this.route.navigateByUrl('login');
  //     }
  //   }
  //   else{
  //     this.route.navigateByUrl('login');
  //   }
  // }


  ngOnInit(): void {
    window.onscroll=()=>{
      if(window.scrollY>0){
        this.shadoweffect=document.getElementsByClassName('header')[0];
        this.shadoweffect.style.boxShadow=`${1}rem ${1}rem ${1}rem #e5e5e5`;
      }
      else{
        this.shadoweffect.style.boxShadow='none';
      }
    }
  }

  logOut(){
    if(confirm("Are you sure to logout")){
      sessionStorage.setItem("login","false");
      this.route.navigateByUrl('').then(()=>{
        window.location.reload();
      })
    }
  }

}
