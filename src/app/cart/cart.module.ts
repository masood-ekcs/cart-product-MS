import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartTotalComponent } from './cart-total/cart-total.component';

@NgModule({
  declarations: [CartListComponent, CartTotalComponent],
  imports: [CommonModule],
  exports: [CartListComponent],
})
export class CartModule {}
