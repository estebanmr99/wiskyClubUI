import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { ProductProfileComponent } from '../../pages/product-profile/product-profile.component';
import { ProductComponent } from '../../pages/products/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../../material/material.module';
import { SubscriptionComponent } from '../../pages/subscription/subscription.component';
import { CreateProductsComponent } from '../../pages/create-products/create-products.component';
import { InventoryComponent } from '../../pages/inventory/inventory.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductComponent,
    ProductProfileComponent,
    SubscriptionComponent,
    CreateProductsComponent,
    InventoryComponent
  ]
})

export class AdminLayoutModule {}
