import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  NgZone,
  OnInit
} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {
  GOOGLE_MAPS_AUTOCOMPLETE_API,
  GOOGLE_MAPS_API_KEY_STRING_REPLACE
} from 'src/app/shared/constants/general.constants';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appGoogleMapsAutoComplete]'
})
export class GoogleMapsAutoCompleteDirective implements OnInit {
  @Output() placeChanged = new EventEmitter<google.maps.places.PlaceResult>();
  constructor(
    private autocompleteInput: ElementRef<HTMLInputElement>,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit() {
    // this.setGooglePlacesAutoCompleteScript();
    this.initializeAutocomplete();
  }

  initializeAutocomplete() {
    this.mapsAPILoader.load().then(() => {
      const autocompleteGoogle = new google.maps.places.Autocomplete(
        this.autocompleteInput.nativeElement
      );
      autocompleteGoogle.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocompleteGoogle.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            console.log('geometry is null');
            return;
          }
          this.placeChanged.emit(place);
        });
      });
    });
  }

  // setGooglePlacesAutoCompleteScript() {
  //   if (!this.checkIfGooglePlacesScriptExists()) {
  //     const node: HTMLScriptElement = document.createElement('script');
  //     node.id = 'google-autocomplete-script';
  //     node.src = GOOGLE_MAPS_AUTOCOMPLETE_API.replace(
  //       GOOGLE_MAPS_API_KEY_STRING_REPLACE,
  //       environment.googleMapsKey
  //     );
  //     node.type = 'text/javascript';
  //     node.async = true;
  //     node.defer = true;
  //     document.getElementsByTagName('body')[0].appendChild(node);
  //   }
  //   this.initializeAutocomplete();
  // }

  // checkIfGooglePlacesScriptExists() {
  //   const element = document.getElementById('google-autocomplete-script');
  //   return typeof element !== 'undefined' && element !== null;
  // }
}
