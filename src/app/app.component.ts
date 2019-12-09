import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapMarker } from './shared/interfaces/google-map-marker';
import { MapStyleName, MapTypeId } from './shared/interfaces/general.interface';
import {
  MAP_TYPE_IDS,
  MAP_STYLE_NAMES,
  DEFAULT_MAP_STYLE_POSTFIX
} from './shared/constants/general.constants';
import { DataService } from './shared/providers/data.service';
import { MapTypeStyle, AgmMap } from '@agm/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('autoCompleteInput', { static: true })
  autoCompleteInput: ElementRef<HTMLInputElement>;

  @ViewChild('googleMap', { static: false }) googleMap: AgmMap;

  title = 'GoogleMapsAutocompleteDirective';

  mapStyleNames = MAP_STYLE_NAMES;
  mapTypeIds = MAP_TYPE_IDS;

  lat = 51.274176;
  lng = 10.318448;
  zoom = 6;
  sideBarOpened = false;
  currentMarker: GoogleMapMarker;

  markerArray: GoogleMapMarker[] = [];
  mapTypeStyles: MapTypeStyle[] = [];
  mapTypeId = 'roadmap';

  constructor(private ngZone: NgZone, private dataService: DataService) {}

  addMarker(place: google.maps.places.PlaceResult) {
    this.markerArray.push({
      place,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    });
    this.autoCompleteInput.nativeElement.value = '';
  }

  deleteMarker(marker: GoogleMapMarker) {
    const markerIndex = this.markerArray.indexOf(marker);
    if (markerIndex > -1) {
      this.ngZone.run(() => {
        this.markerArray.splice(markerIndex, 1);
      });
    }
    console.log(this.markerArray);
  }

  openMarkerDetails(marker: GoogleMapMarker) {
    this.currentMarker = marker;
    this.sideBarOpened = true;
  }

  closeMarkerDetails() {
    this.currentMarker = null;
    this.sideBarOpened = false;
  }

  setMapTypeId(mapTypeId: MapTypeId) {
    if (MAP_TYPE_IDS.includes(mapTypeId)) {
      this.mapTypeId = mapTypeId;
      this.mapTypeStyles = [];
    }
  }

  setMapStyle(mapStyleName: MapStyleName) {
    this.setMapTypeId('roadmap');
    if (MAP_STYLE_NAMES.includes(mapStyleName)) {
      this.dataService
        .get<MapTypeStyle[]>(
          'google-map-styles/' + mapStyleName + DEFAULT_MAP_STYLE_POSTFIX,
          true
        )
        .subscribe((data) => {
          this.mapTypeStyles = data;
        });
    }
  }

  displayErrorModal() {
    this.dataService.errorModalOpen(
      '<i class="material-icons">error</i> Sample Error'
    );
  }
}
