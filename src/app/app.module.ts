import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GoogleMapsAutoCompleteModule } from './shared/directives/google-maps-auto-complete/google-maps-auto-complete.module';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonErrorModalModule } from './shared/modals/common-error-modal/common-error-modal.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const angularMaterialModules = [
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
];

const sharedModules = [GoogleMapsAutoCompleteModule, CommonErrorModalModule];

const libraryModules = [
  AgmCoreModule.forRoot({
    apiKey: environment.googleMapsKey,
    libraries: ['places']
  }),
  AgmSnazzyInfoWindowModule,
  SidebarModule
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...sharedModules,
    ...libraryModules,
    ...angularMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
