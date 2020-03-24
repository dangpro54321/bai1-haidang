import { Injectable } from '@angular/core';
import { data } from '../MockData'
@Injectable()
export class ProductService {
  products = data;
  constructor() { }
  getProducts() {
    return this.products;
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
