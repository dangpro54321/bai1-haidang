import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.getproduct();
  }
  getproduct() {
    this.activatedRoute.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(data => {
        console.log(data);
        this.product = data;
      });
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.route.navigateByUrl("product/manager");
    });
  }
}
