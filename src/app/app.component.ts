import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

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
  imports: [RouterOutlet, CardComponent],
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
}