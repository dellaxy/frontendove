import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListData } from '../../models/listData.model';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss'
})
export class ListGroupComponent {

  @Input({ required: true }) listData: ListData[];

  @Output() rowClicked = new EventEmitter<ListData>();

  constructor() { }

  onRowClicked(item: ListData): void {
    this.rowClicked.emit(item);
  }

}
