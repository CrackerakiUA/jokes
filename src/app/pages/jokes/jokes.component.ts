import { Component } from '@angular/core';
import { JokeService } from '@services';
@Component({
	selector: 'jokes',
	templateUrl: './jokes.component.html',
	styleUrls: ['./jokes.component.scss']
})
export class JokesComponent{
	public search = '';
	public page = 0;
	constructor(public js: JokeService) {}
}
