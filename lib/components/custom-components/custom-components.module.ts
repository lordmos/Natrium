import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableLiteComponent } from './table-lite/table-lite.component';
import { FormLiteComponent } from './form-lite/form-lite.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LocationSelectComponent } from './location-select/location-select.component';
import { OutletComponent } from './outlet/outlet.component';
import { ComponentHostDirective } from './component-host/component-host.directive';

@NgModule({
	imports: [
		CommonModule, FormsModule, ReactiveFormsModule, RouterModule
	],
	declarations: [
		TableLiteComponent,
		FormLiteComponent,
		PaginationComponent,
		LocationSelectComponent,
		OutletComponent,
		ComponentHostDirective
	],
	exports: [
		TableLiteComponent,
		FormLiteComponent,
		PaginationComponent,
		LocationSelectComponent,
		OutletComponent,
		ComponentHostDirective
	]
})
export class CustomComponentsModule { }
