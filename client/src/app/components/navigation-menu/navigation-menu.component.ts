import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('open => closed', animate('300ms ease-in-out')),
      transition('closed => open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class NavigationMenuComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(
    public userServices: UsersService
  ) { }

  ngOnInit(): void { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.userServices.userLogout();
  }
}
