import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-menu',
  templateUrl: './chip-menu.component.html',
  styleUrl: './chip-menu.component.scss'
})
export class ChipMenuComponent {
  @Input({ required: true }) menuItems: { label: string, route: string }[];
}
