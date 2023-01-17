import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'portfolio-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private http: HttpClient, private primeConfig: PrimeNGConfig) {}

	ngOnInit() {
		this.primeConfig.ripple = true;
	}
}
