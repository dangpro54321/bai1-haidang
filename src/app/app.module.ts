import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './services/product.service';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, ProductComponent,CategoryComponent, ProductManagerComponent, ProductDetailComponent, AddProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService],
 
})
export class AppModule { }
