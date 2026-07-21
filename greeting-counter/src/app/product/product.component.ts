import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: false
})

export class ProductComponent{
  products: string[] = [];

  today = new Date();
  price = 1234.5;
  message = 'Hello Angular Pipes';
  user = { name: 'Ada', role: 'engineer' };
  visible = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.products$.subscribe(data => {
      this.products = data;
    });
    // this.products = this.productService.products$;
  }

  addProduct() {
    this.productService.addProduct('Monitor');
  }
}
