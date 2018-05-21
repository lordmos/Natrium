import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Global } from '../../../services/global.service';
import { LocationInfo } from './location-info';

@Component({
	selector: 'location-select',
	templateUrl: './location-select.component.html',
	styleUrls: ['./location-select.component.css'],
	providers: [Global]
})
export class LocationSelectComponent {

	public locationConfig: any;
	p: any;
	c: any;
	d: any;

	@Input() locationInfo: LocationInfo;
	@Input() isDisabled: boolean;
	@Output() onLocationSelect = new EventEmitter<LocationInfo>();

	constructor() {
		this.locationConfig = Global.getCityConfig();
		this.locationInfo = new LocationInfo();
		this.isDisabled = false;
		this.p = "";
		this.c = "";
		this.d = "";
	}

	ngOnInit() { }

	provinces(): Array<string> {
		return Object.keys(this.locationConfig.province);
	}

	getProvince(provinceId: number): any {
		if (provinceId == -1) return { 'id': '', 'name': '' };
		return this.locationConfig.province[provinceId];
	}

	provinceChange(provinceId: number): void {
		this.locationInfo.provinceId = provinceId;
		this.locationInfo.provinceName = this.getProvince(this.locationInfo.provinceId).name;
		this.locationInfo.cityId = -1;
		this.locationInfo.cityName = "";
		this.locationInfo.districtId = -1;
		this.locationInfo.districtName = "";
	}

	cities(provinceId: number): Array<string> {
		if (provinceId == -1) return [];
		return Object.keys(this.locationConfig.province[provinceId].cites);
	}

	getCity(provinceId: number, cityId: number): any {
		if (provinceId == -1 || cityId == -1) return { 'id': '', 'name': '' };
		return this.locationConfig.province[provinceId].cites[cityId];
	}

	cityChange(cityId: number): void {
		this.locationInfo.cityId = cityId;
		this.locationInfo.cityName = this.getCity(this.locationInfo.provinceId, this.locationInfo.cityId).name;
		this.locationInfo.districtId = -1;
		this.locationInfo.districtName = "";
	}

	districts(provinceId: number, cityId: number): Array<string> {
		if (provinceId == -1 || cityId == -1) return [];
		if (!this.locationConfig.province[provinceId].cites[cityId]) return [];
		return Object.keys(this.locationConfig.province[provinceId].cites[cityId].districts);
	}

	getDistrict(provinceId: number, cityId: number, districtId: number): any {
		if (provinceId == -1 || cityId == -1 || districtId == -1) return { 'id': '', 'name': '' };
		return this.locationConfig.province[provinceId].cites[cityId].districts[districtId];
	}

	districtChange(districtId: number): void {
		this.locationInfo.districtId = districtId;
		this.locationInfo.districtName = this.getDistrict(this.locationInfo.provinceId, this.locationInfo.cityId, this.locationInfo.districtId).name;
		this.onLocationSelect.emit(this.locationInfo);
	}


	ngOnChanges(changes: any) {
		if (changes["locationInfo"]) {
			let location = changes["locationInfo"].currentValue;
			if(location.provinceId) {
				this.p = location.provinceId;
			}
			if(location.cityId) {
				this.c = location.cityId;
			}
			if(location.districtId) {
				this.d = location.districtId;
			}
		}
	}



}
