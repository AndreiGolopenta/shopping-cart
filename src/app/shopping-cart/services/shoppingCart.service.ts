import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.interface';

import { Observable } from 'rxjs';

const API: string = 'http://localhost:3000/products';

@Injectable()
export class ShoppingCartService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API);
  }

}