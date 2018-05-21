import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

	@Input() totalPage: number;
	@Input() maxLength: number;
	@Output() onPageChange = new EventEmitter<number>();

	@Input() currentPage: number;
	constructor() { }

	firstPage() {
		if (this.currentPage == 0) return;
		this.currentPage = 0;
		this.onPageChange.emit(this.currentPage);
	}

	lastPage() {
		if (this.currentPage == this.totalPage - 1) return;
		this.currentPage = this.totalPage - 1;
		this.onPageChange.emit(this.currentPage);
	}

	previousPage() {
		if (this.currentPage > 0) {
			this.currentPage--;
		} else {
			this.currentPage = 0;
			return;
		}
		this.onPageChange.emit(this.currentPage);
	}

	nextPage() {
		if (this.currentPage < this.totalPage - 1) {
			this.currentPage++;
		} else {
			this.currentPage = this.totalPage - 1;
			return;
		}
		this.onPageChange.emit(this.currentPage)
	}

	changePage(page: number) {
		this.currentPage = page;
		this.onPageChange.emit(this.currentPage)
	}

	getPages() {
		let arr = new Array(this.totalPage);
		for (let i = 0; i < this.totalPage; i++) {
			arr[i] = i;
		}
		if (this.totalPage <= this.maxLength) {
			return arr;
		}
		let last = this.totalPage;
		let first = 0;
		if (this.currentPage - Math.floor(this.maxLength / 2) < 0) {
			return arr.slice(0, this.maxLength)
		} else {
			first = this.currentPage - Math.floor(this.maxLength / 2);
		}
		if (this.currentPage + Math.floor(this.maxLength / 2) > this.totalPage - 1) {
			return arr.slice(-this.maxLength)
		} else {
			last = this.currentPage + Math.floor((this.maxLength + 1) / 2);
		}
		return arr.slice(first, last)
	}

}
