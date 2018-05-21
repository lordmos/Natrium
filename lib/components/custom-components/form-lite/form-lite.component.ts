import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormConfig } from './form-config';

@Component({
	selector: 'form-lite',
	templateUrl: './form-lite.component.html',
	styleUrls: ['./form-lite.component.css']
})
export class FormLiteComponent {

	@Input() data: any;
	@Input() config: FormConfig;
	@Output() save = new EventEmitter<any>();

	dataCopy: any;
	editState: Array<boolean>;

	constructor() { }

	ngOnInit() {
		this.dataCopy = {};
	}

	copy() {
		if (!this.data) return;
		Object.keys(this.data).map((key) => this.dataCopy[key] = this.data[key]);
	}

	onSave(key: string, value: string, index: number) {
		let data = {};
		if (this.config.getForm()[index].type == "date") {
			data[key] = new Date(value).getTime();
		} else {
			data[key] = value;
		}
		this.save.emit(data);
		this.changeEditable(index);
	}

	changeEditable(index: number) {
		this.editState[index] = !this.editState[index];
	}

	cancel(key: string, index: number) {
		this.dataCopy[key] = this.data[key];
		this.changeEditable(index);
	}

	ngOnChanges(changes: any) {
		if (changes["data"]) {
			this.data = changes["data"].currentValue;
		}
		if (changes["config"]) {
			this.config = changes["config"].currentValue;
		}
		this.copy();
		this.editState = new Array<boolean>(this.config.getForm().length);
		this.editState.fill(false);
	}

	onLocationSelect(location: any, key: string, index: number) {
		// this.onSave(key, location, index);
		console.log(location);
		// console.log(key);
		// console.log(index);
	}
}
