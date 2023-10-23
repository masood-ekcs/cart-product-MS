import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
