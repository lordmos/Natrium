export class FormConfig {
	private title: string;
	private form: Array<any>;
	private actions: Array<any>;

	constructor() {
		this.title = "";
		this.form = [];
		return this;
	}

	setTitle(title: string): FormConfig {
		this.title = title;
		return this;
	}

	setForm(form: Array<any>): FormConfig {
		this.form = form;
		return this;
	}

	setActions(actions: Array<any>): FormConfig {
		this.actions = actions;
		return this;
	}

	getTitle(): string {
		return this.title;
	}

	getForm(): Array<any> {
		return this.form;
	}

	getActions(): Array<any> {
		return this.actions;
	}

}
