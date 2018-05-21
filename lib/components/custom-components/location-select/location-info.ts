export class LocationInfo {

    private _provinceId: number;
    private _provinceName: string;
    private _cityId: number;
    private _cityName: string;
    private _districtId: number;
    private _districtName: string;

    constructor() {
        this._provinceId = -1;
        this._provinceName = "";
        this._cityId = -1;
        this._cityName = "";
        this._districtId = -1;
        this._districtName = "";
    }

    get provinceId(): number {
        return this._provinceId;
    }

    set provinceId(id: number) {
        this._provinceId = id;
    }

    get provinceName(): string {
        return this._provinceName;
    }

    set provinceName(name: string) {
        this._provinceName = name;
    }

    get cityId(): number {
        return this._cityId;
    }

    set cityId(id: number) {
        this._cityId = id;
    }

    get cityName(): string {
        return this._cityName;
    }

    set cityName(name: string) {
        this._cityName = name;
    }

    get districtId(): number {
        return this._districtId;
    }

    set districtId(id: number) {
        this._districtId = id;
    }

    get districtName(): string {
        return this._districtName;
    }

    set districtName(name: string) {
        this._districtName = name;
    }



}