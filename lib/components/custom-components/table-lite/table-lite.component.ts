import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableConfig } from './table-config';

@Component({
	selector: 'table-lite',
	templateUrl: './table-lite.component.html',
	styleUrls: ['./table-lite.component.css']
})
export class TableLiteComponent {

	@Input() data: Array<any>;
	@Input() config: TableConfig;
	selectList: Array<boolean>;

	constructor() {
		this.selectList = [];
	}

	ngOnInit() { }

	needShowTitle(): boolean {
		if (this.isCheckedMulti() && this.config.getMultiActions().length > 0) {
			return false;
		}
		if (this.isChecked() && !this.isCheckedMulti() && this.config.getSingleActions().length > 0) {
			return false;
		}
		return true;
	}

	selectAll(selected: any) {
		this.selectList.fill(selected.checked);
	}

	select(index: number, selected: any) {
		if (this.config.isOnlySingleSelectEnabled()) {
			this.selectList.fill(false);
		}
		this.selectList[index] = selected.checked;
	}

	getCheckedIndexList(): Array<number> {
		let checkedList = [];
		for (let index in this.selectList) {
			if (this.selectList[index]) {
				checkedList.push(index);
			}
		}
		return checkedList;
	}

	isChecked(): boolean {
		let checkedList = this.getCheckedIndexList();
		return checkedList.length != 0;
	}

	isCheckedMulti(): boolean {
		let checkedList = this.getCheckedIndexList();
		return checkedList.length > 1;
	}

	getDate(time: number): string {
		return time ? new Date(time).toLocaleString() : "";
	}

	ngOnChanges(changes: any) {
		if (changes["data"]) {
			this.data = changes["data"].currentValue;
		}
		if (changes["config"]) {
			this.config = changes["config"].currentValue;
		}
	}

}
