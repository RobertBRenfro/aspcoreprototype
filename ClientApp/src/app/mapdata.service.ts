import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface iLatLong {
    lat:number;
    lng:number;
}

export interface iViewport {
    northeast: iLatLong;
    southwest: iLatLong;
}

export interface iGeometry {
    location: iLatLong
    location_type: string;
    viewport: iViewport;
}

export interface iAddressInfomation {
   long_name : string;
    short_name : string;
    types : string[];
}


export interface MapDataDetail {
    address_components: iAddressInfomation[];
    formatted_address: string;
    geometry: iGeometry;
    place_id: string;
    types: string [];
}

export interface MapData{
    results: MapDataDetail[];
}

@Injectable()
export class MapdataService {

    mapData = {
    results: [{
    address_components: {},
    geometry: { location: {}, viewport: {} }}]} as MapData;
    
    constructor(private http: HttpClient) {  }
  
     getMapCoordinates(address) {
        return this.http.get<MapData>('https://maps.googleapis.com/maps/api/geocode/json?address='+address);
    }
}
