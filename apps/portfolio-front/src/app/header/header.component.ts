import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'portfolio-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] = [];
	activeItem: MenuItem = {};

	ngOnInit() {
		this.initHeader();
	}

	initHeader(): void {
		this.items = [
			{ label: 'Accueil', routerLink: ['/home'] },
			{ label: 'Qui suis-je ?', routerLink: ['/infos'] },
			{ label: 'Mes projets', routerLink: ['/projects'] },
			{ label: 'Contact', routerLink: ['/contact'] },
		];
		this.activeItem = this.items[0];
	}
}
