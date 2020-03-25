import { Injectable } from '@angular/core';
import { data } from '../MockData'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable()
export class ProductService {
  api = "https://5e7b50320e046300163330bd.mockapi.io/product"
  products = data;
  constructor(
    private http: HttpClient,
  ) { }
  getProducts(): Observable<Product[]> {
    // return this.products;
   return this.http.get<Product[]>(this.api);
  }

  getProduct(id) {
 return this.products.find(p=>p.id==id)
  }

  removeProduct(id) {
    return this.products = this.products.filter(product => product.id != id)
  }

  addProduct(product) {
    console.log(product);
    let newObj = { id: 6, ...product };
    console.log(newObj);
    this.products.push(newObj);
    console.log(this.products)
  }

}
