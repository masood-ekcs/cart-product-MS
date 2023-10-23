import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  itemCount!: number;

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.cartProductCount.subscribe((value: number) => {
      this.itemCount = value;
    });
  }

  ngOnDestroy(): void {}
}
