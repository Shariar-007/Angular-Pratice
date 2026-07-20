import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: false
})

export class ProductComponent{
  products: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.products$.subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct('Monitor');
  }
}