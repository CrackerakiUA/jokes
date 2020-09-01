import { NgModule } from '@angular/core';
import { CommonModule } from '@common';
import { JokesComponent } from './jokes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: JokesComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		JokesComponent
	],
	providers: []
	
})

export class JokesModule { }
