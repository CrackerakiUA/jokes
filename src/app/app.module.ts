import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// Common
import { AppComponent } from './app.component';
// config
import { WacomModule, MetaGuard, Config } from 'wacom';
const config: Config = {
	socket: {},
	meta: {
		useTitleSuffix: true,
		defaults: {
			title: 'Joke',
			titleSuffix: ' | Joke'
		}
	}
};
/*
*	Routing Management
*/
	const routes: Routes = [{
		path: '',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Jokes'
			}
		},
		loadChildren: () => import('./pages/jokes/jokes.module').then(m => m.JokesModule)
	}, {
		path: ':_id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Joke'
			}
		},
		loadChildren: () => import('./pages/joke/joke.module').then(m => m.JokeModule)
	}];
/* Bootstrap */

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		WacomModule.forRoot(config),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
