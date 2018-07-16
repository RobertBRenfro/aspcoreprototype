import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Geometry {
    location: {
        [key: string]:LatLong
        };
    location_type: string;
    viewport: {
        [key: string]: Viewport
        };
}

export interface Viewport {
    northeast: {
        [key: string]: LatLong
        };
    southwest: {
        [key: string]: LatLong;
        };
}

export interface LatLong {
    lat:number;
    lng:number;
}

export interface AddressInfomation {
   long_name : string;
    short_name : string;
    types : string[];
}
export interface MapData {
    address_components: {
        [key: string]: AddressInfomation
    };
    formatted_address: string;
    geometry: {
        [key: string]: Geometry
    };
    place_id: string;
    types: string [];
}

@Injectable()
export class MapdataService {

    constructor(private http: HttpClient) {  }
  
     getMapCoordinates(address) {
        return this.http.get<MapData>('https://maps.googleapis.com/maps/api/geocode/json?address='+address);
    }
}
