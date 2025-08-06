import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  books = [
    'The Great Gatsby',
    'To Kill a Mockingbird',
    '1984',
    'Pride and Prejudice',
    'The Catcher in the Rye',
    'The Lord of the Rings',
    'The Hobbit',
    'Fahrenheit 451',
    'Brave New World',
    'The Alchemist',
    'The Picture of Dorian Gray',
    'The Chronicles of Narnia',
    'The Grapes of Wrath',
    'Moby'];

  getBooks(): string[] {
    return this.books;
  }

  getBook(id: number) {
    return this.books[id];
  }
}