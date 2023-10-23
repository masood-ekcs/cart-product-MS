import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartDB!: ProductInterface[];
  cartTotal: number = 0;
  constructor(private productService: ProductServiceService) {}

  deleteFromCart(id: number) {
    this.productService.removeFromCart(id);
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    let total = 0;
    for (const item of this.cartDB) {
      total += item.price;
    }
    this.cartTotal = total;
  }

  ngOnInit(): void {
    this.cartDB = this.productService.getCartData();
    console.log(this.cartDB);
    this.calculateTotalAmount();
  }
}
