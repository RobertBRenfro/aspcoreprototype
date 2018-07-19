import { Component, OnInit } from '@angular/core';
import { MapdataService } from '../mapdata.service';
import { MapData } from '../mapdata.service';
import { ActivatedRoute } from "@angular/router";

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

    constructor(private route: ActivatedRoute,private data: MapdataService) { 
        this.route.params.subscribe( params => this.addressText = params.address );
    }

    ngOnInit() {
        if (this.isBlank(this.addressText)){
            this.mapData.results[0].geometry.location.lat = 22.3166654;
            this.mapData.results[0].geometry.location.lng = 114.1833326;
        }
        else 
            this.getMap();
    }

    getMap() {
            this.data.getMapCoordinates(this.addressText).subscribe(
                data => this.mapData = data
                );
  
    }

    private isBlank(str:string)  {
        return (!str || /^\s*$/.test(str));
    }
}
