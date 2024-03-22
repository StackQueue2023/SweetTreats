import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  storeuser:any;
  user:any;
  parsedDetails:any;

  constructor(private http:HttpClient,private route:Router) { }

  getUserDetails(uservalue:any){
    this.http.post<any>("http://localhost:8000/register",uservalue).subscribe((userdetails)=>{
      const userval=userdetails.find((user:any)=>{

          return user.email==uservalue.email;
      })

      if(userval){
        alert("Already an User");
      }
      else{
        alert("Welcome to Sweettreats, Thanks for registering");
        this.http.post<any>("http://localhost:8000/newuser",uservalue).subscribe((message)=>{
          console.log(message);
        })
      }

    })
  }


  checkUser(user:any){
    this.http.post<any>("http://localhost:8000/register",user).subscribe((userdetails)=>{
      const userval=userdetails.find((userval:any)=>{
        this.storeuser=userval;
        return userval.email==user.email && userval.password==user.password;
    })

    if(userval){
      alert("Login Successful");
      sessionStorage.setItem('login','true');
      const parseDetails=JSON.stringify(this.storeuser);
      sessionStorage.setItem('userDetails',parseDetails);
      this.route.navigateByUrl('products').then(()=>{
        window.location.reload();
      });

    }
    else{
      alert("Invalid Credentials");
    }
    })
  }

  changePassword(userdetails:any){
    this.http.post<any>("http://localhost:8000/register",userdetails).subscribe((uservalue)=>{
    const user=uservalue.find((found:any)=>{
      return found.email==userdetails.email;
    });

    if(user){
      this.http.post<any>("http://localhost:8000/forgotpassword",userdetails).subscribe(()=>{
      console.log("updated");
      alert("Password Updated");
      this.route.navigateByUrl('login').then(()=>{
        window.location.reload();
      })
      })
    }
    else{
      alert("Invalid Details, Register first");
    }
    })
  }

  getproducts(){
    return this.http.get<any>("http://localhost:8000/products")
  }

  productBook(product:any){
    console.log(product);
    this.http.post<any>('http://localhost:8000/bookproduct',product).subscribe((result)=>{
      console.log(result);
      this.route.navigateByUrl('orderconfirm');
    })
  }
}
