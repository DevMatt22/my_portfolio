import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{ path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
	{ path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
	{ path: 'infos', loadChildren: () => import('./infos/infos.module').then((m) => m.InfosModule) },
	{ path: 'projects', loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule) },

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
