import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Code } from './code.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCurrencyCodes() {
    const url = "https://localhost:7024/api/Product/codes";
    return this.http.get<Code[]>(url);
  }

  getAllProducts(code: string) {
    const url = `https://localhost:7024/api/Product/${code}`;
    return this.http.get<Product[]>(url);
  }

}