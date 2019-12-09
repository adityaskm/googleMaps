export const MAP_STYLE_NAMES = ['desert', 'retro', 'shades-of-grey'];

export const MAP_TYPE_IDS = ['roadmap', 'hybrid', 'satellite', 'terrain'];

export const COMMON_REQUEST_HEADERS = {
  'Content-Type': 'application/json'
};

export const DEFAULT_MAP_STYLE_POSTFIX = '-map-style.json';

export const APIEndPoints = {
  mapStyles: 'google-map-styles/'
};

export const GOOGLE_MAPS_AUTOCOMPLETE_API =
  'https://maps.googleapis.com/maps/api/js?key={{googleMapsAPIKey}}&libraries=places';

export const GOOGLE_MAPS_API_KEY_STRING_REPLACE = '{{googleMapsAPIKey}}';
