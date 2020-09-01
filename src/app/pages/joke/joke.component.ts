import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'wacom';
@Component({
	selector: 'joke',
	templateUrl: './joke.component.html',
	styleUrls: ['./joke.component.scss']
})
export class JokeComponent{
	public joke:any = {};
	constructor(private http: HttpService, private router: Router) {
		http.get('http://api.icndb.com/jokes/'+router.url.replace('/',''), (resp) => {
			if(resp.type=='success') this.joke = resp.value;
			else this.router.navigate(['/']);
			console.log(resp);
		});
	}
	back(){
		window.history.back();
	}
}
