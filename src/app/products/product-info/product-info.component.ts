import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent {
  @Input() singleProduct!: ProductInterface;
  @Output() addToCart = new EventEmitter<number>();

  cartClick(productID: number) {
    this.addToCart.emit(productID);
  }
}
