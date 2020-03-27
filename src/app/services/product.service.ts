import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../Product";

@Injectable()
export class ProductService {
  api = "https://5e7b50320e046300163330bd.mockapi.io/product";
  products = data;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}
