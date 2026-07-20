
import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService{
  private productsSubject = new BehaviorSubject<string[]>([
    "Product 1",
    "Product 2",
    "Product 3"
  ]);

  products$ = this.productsSubject.asObservable();

  addProduct(product: string){
    this.productsSubject.next([...this.productsSubject.value, product]);
  }


}
