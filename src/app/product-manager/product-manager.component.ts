import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from '../services/product.service'
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService
  ) {}

  ngOnInit():void {
     this.getProducts();
  }

  removeItem(id) {
    this.productService.removeProduct(id).subscribe(response => {
      console.log(response);
      this.products= this.products.filter(product=>product.id!=response.id);
    })
  }
  getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }
}
