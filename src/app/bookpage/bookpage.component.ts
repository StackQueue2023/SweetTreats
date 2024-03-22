import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.css'
})
export class BookpageComponent {
    constructor(private route:Router){
      setTimeout(()=>{
        sessionStorage.removeItem('product');
        route.navigateByUrl('products');
        },2000)
    }
}
