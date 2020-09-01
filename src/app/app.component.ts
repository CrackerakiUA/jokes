import { Component } from '@angular/core';
import { UiService } from 'wacom';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public dark = false;
	constructor(private ui: UiService) {
		console.log(ui.get());
		this.dark = ui.get()['--primary-color']=='rgb(0,0,0)';
		console.log(this.dark);
	}
	mode(){
		this.dark=!this.dark;
		if(this.dark){
			this.ui.set({
				'--primary-color': 'rgb(0,0,0)',
				'--secondary-color': 'rgb(255,255,255)',
			}, 'local');
		}else{
			this.ui.set({
				'--primary-color': 'rgb(255,255,255)',
				'--secondary-color': 'rgb(0,0,0)',
			}, 'local');
		}
	}
}
