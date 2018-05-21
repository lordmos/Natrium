import { ComponentRef } from '@angular/core';

export class TableConfig {
	private C;
	private title: string;
	private columns: Array<any>;
	private singleActions: Array<any>;
	private multiActions: Array<any>;
	private normalActions: Array<any>;
	private singleSelect: boolean;
	private context: any;

	constructor() {
		this.title = "";
		this.columns = [];
		this.singleActions = [];
		this.multiActions = [];
		this.normalActions = [];
		this.singleSelect = false;
		return this;
	}

	setTitle(title: string): TableConfig {
		this.title = title;
		return this;
	}

	setColumns(columns: Array<any>): TableConfig {
		this.columns = columns;
		return this;
	}

	setSingleActions(singleActions: Array<any>): TableConfig {
		this.singleActions = singleActions;
		return this;
	}

	setMultiActions(multiActions: Array<any>): TableConfig {
		this.multiActions = multiActions;
		return this;
	}

	setNormalActions(normalActions: Array<any>): TableConfig {
		this.normalActions = normalActions;
		return this;
	}

	getTitle(): string {
		return this.title;
	}

	getColumns(): Array<any> {
		return this.columns;
	}

	getSingleActions(): Array<any> {
		return this.singleActions;
	}

	getMultiActions(): Array<any> {
		return this.multiActions;
	}

	getNormalActions(): Array<any> {
		return this.normalActions;
	}

	isOnlySingleSelectEnabled(): boolean {
		return this.singleSelect;
	}

	enableSingleSelect(enable: boolean) {
		this.singleSelect = enable;
		return this;
	}

}
