import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
// import { data } from '../MockData';
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  // products = data;

  // selected: product;
  // showDetail(product) {
  // //   this.selected = product;
  // }
  removeItem(id) {
    this.products = this.productService.removeProduct(id);
    // this.products = this.products.filter(p => p.id != id);
  }
}
