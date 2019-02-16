import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { setTheme } from 'ngx-bootstrap/utils'; //https://valor-software.com/ngx-bootstrap/#/documentation#installation-instructions

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	title = 'primeiro-projeto';

	constructor(
		private ngZone: NgZone,
		) {
		setTheme('bs3');
	}

	ngOnInit() {
		
	}

	
}
