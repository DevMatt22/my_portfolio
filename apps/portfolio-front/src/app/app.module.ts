import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

registerLocaleData(localeFr);

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		EditorModule,
		PaginatorModule,
		TabMenuModule,
		ButtonModule,
		MenubarModule,
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'fr-FR',
		},
	],
	bootstrap: [AppComponent],
	exports: [HomeComponent],
})
export class AppModule {}
