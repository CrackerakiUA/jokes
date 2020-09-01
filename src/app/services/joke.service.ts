import { Injectable } from '@angular/core';
import { HttpService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class JokeService {
	public jokes: any = [];
	constructor(private http: HttpService) { 
		http.get('http://api.icndb.com/jokes/random/1000', (resp) => {
			if(resp.type=='success') this.jokes = resp.value;
		});
	}
}
