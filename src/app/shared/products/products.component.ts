import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  cart=faShoppingCart;

  constructor(private router:Router){}
  onLogin(){
    this.router.navigate(['login']);
  }

}
