import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];
  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.menuItems;
  }

}
