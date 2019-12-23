import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
