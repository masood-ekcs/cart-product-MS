import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsDB!: ProductInterface[]; // [{name, price, qty, description}]
  selectedProduct!: ProductInterface;

  constructor(private productService: ProductServiceService) {}

  updateCartData(productID: number) {
    this.productService.addToCart(productID);
  }

  ngOnInit(): void {
    this.productsDB = this.productService.getProduct();
    // console. log(this.productsDB); // to check if the values are coming
  }
}
