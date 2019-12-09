# GoogleMapsAutocompleteDirective [Angular v8.3.2]

Hello This is a sample Project in Angular for using Google Places Autocomplete with the native Angular Google Maps.

## How to Run:

Clone the Repo and run `npm install`. After that insert you Google Maps API Key in environment (and environment.prod if you like).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Features:

The App has been built using the Following Libraries:

1.  [AGM-Core](https://angular-maps.com/)
2.  [Angular Material](https://material.angular.io/) - For Modal, Input and the Buttons
3.  [Materialize Css](https://materializecss.com/) - For a card View and a base layout and Typography

## Project Structure

- `shared`: This Folder Contains all modules, directives, interfaces, and such that would be used throughout the App. 1. `constants`: All App Constants 2. `directives`: Separate Modules that import and export directives (Google Places AutoComplete) 3. `interfaces`: Models for our Code. 4. `Modals`: All the Common Modals used. Using Angular Material. - Common Error Modal: This is called through the data Service. Uses inner HTML to enable passing of parseable html instead of a string error message. 5. `providers`: The Data Service. We use dynamic types for get and post, and use the data service for adding postparams, headers and handling common errors. 6. `Styles`: - Materialize CSS: We use the materialize Grid, typography and helpers, and comment out the rest of the unrequired components. - Angular Material: We Define a custom theme for our application. We have chosen a cool blue gray theme for our application. - theme: Here we define our own variables and helpers for use throughout our application.
