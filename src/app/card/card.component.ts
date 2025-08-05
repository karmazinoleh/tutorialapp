import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  slogan = input<string>();
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }

}
