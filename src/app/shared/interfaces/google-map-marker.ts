import { LatLngLiteral } from '@agm/core';

export interface GoogleMapMarker extends LatLngLiteral {
  place: google.maps.places.PlaceResult;
}
