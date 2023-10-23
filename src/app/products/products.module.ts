import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [ProductListComponent, ProductInfoComponent],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductModule {}
