import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from './card/card.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { NgIf, NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}

// Product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  publisherId: number;
  publisher: Publisher;
  productDetails?: ProductDetails | null;
  customers?: Customer[] | null;
}

// Customer.ts
export interface Customer {
  id: number;
  name: string;
  products: Product[]; // 
}

// ProductDetails.ts
export interface ProductDetails {
  id: number;
  description?: string | null;
  created: Date;
  productId: number;
  // product?: Product | null; // Якщо потрібно, можна додати
}

// Publisher.ts
export interface Publisher {
  publisherId: number;
  name: string;
}

class User {
  id: number;
  name: string;
  greeted : boolean = false;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
    this.greeted = true;
  }
}

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, NgIf, NgFor, HttpClientModule, RouterOutlet, RouterLink, CardComponent, FormsModule, ReactiveFormsModule, StarPipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialapp';
  city : string = 'New York';
  users : User[] = [
    new User(1, 'Alice'),
    new User(2, 'Bob'),
    new User(3, 'Charlie')
  ];

  message = 'Welcome to the Angular Tutorial App!';
  onMouseOver() {
    this.message = 'Mouse is over the app!';
  }
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  someText : string = "";

  showSomeText() {
    alert(this.someText);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

  cardService = inject(CardService);
  displayBooks = this.cardService.getBooks().join(', ');

  tryStar : string = 'Angular is awesome!';

  products$!: Observable<Product[]>;

  constructor(private http: HttpClient) {
  }

  getProducts() {
    this.products$ = this.http.get<Product[]>('http://localhost:5115/api/product');
  }

}