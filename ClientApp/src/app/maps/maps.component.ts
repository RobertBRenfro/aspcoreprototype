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
    mapData: MapData;
    lat = 22.3166654;
    lng = 114.1833326;

  constructor(private data: MapdataService) { }

    ngOnInit() {
        this.mapData.geometry.location[0].lat = 22.3166654;
        this.mapData.geometry.location[0].lng = 114.1833326;
  }

    getMap() {
            this.data.getMapCoordinates(this.addressText).subscribe(
                data => this.mapData = data
                );
        this.lat = this.mapData.geometry.location[0].lat;
        this.lng = this.mapData.geometry.location[0].lng;
    }
}
