import { Component, OnInit } from '@angular/core';
import { MapdataService } from '../mapdata.service';
import { MapData } from '../mapdata.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    btnText: string = 'Get Map';
    addressText: string;
    mapData = {
        results: [{
    address_components: {},
    geometry: { location: {}, viewport: {} }}]} as MapData;

  constructor(private data: MapdataService) { }

    ngOnInit() {
        this.mapData.results[0].geometry.location.lat = 22.3166654;
        this.mapData.results[0].geometry.location.lng = 114.1833326;
  }

    getMap() {
            this.data.getMapCoordinates(this.addressText).subscribe(
                data => this.mapData = data
                );
  
    }
}
