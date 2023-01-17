import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos/infos.component';

@NgModule({
	declarations: [InfosComponent],
	imports: [CommonModule, InfosRoutingModule],
})
export class InfosModule {}
