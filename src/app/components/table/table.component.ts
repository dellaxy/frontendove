import { Component, Input } from '@angular/core';
import { TableData } from '../../models/tableData.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input({ required: true }) tableData: TableData;

  constructor() { }
}
