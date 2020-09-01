import { NgModule } from '@angular/core';
import { CommonModule } from '@common';
import { JokeComponent } from './joke.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: JokeComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		JokeComponent
	],
	providers: []
	
})

export class JokeModule { }
