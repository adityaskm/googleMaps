import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { COMMON_REQUEST_HEADERS } from '../constants/general.constants';
import { environment } from 'src/environments/environment';
import { of, Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { CommonErrorModalComponent } from '../modals/common-error-modal/common-error-modal/common-error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get<T>(url: string, applyAPIUrl: boolean, optionalHeaders?: any) {
    return this.httpClient
      .get<T>(applyAPIUrl ? environment.apiURL + url : url, {
        headers: { ...COMMON_REQUEST_HEADERS, ...optionalHeaders }
      })
      .pipe(catchError((error) => this.handleAPIErrors<T>(error)));
  }

  post<T>(
    url: string,
    applyAPIUrl: boolean,
    postParams: any,
    optionalHeaders?: any
  ) {
    return this.httpClient.post<T>(
      applyAPIUrl ? environment.apiURL + url : url,
      this.addParamsToPostData(postParams),
      {
        headers: { ...COMMON_REQUEST_HEADERS, ...optionalHeaders }
      }
    );
  }

  addParamsToPostData(postParams: any) {
    if (postParams) {
      postParams.authenticationDetails = {
        username: 'aditya',
        password: 'password'
      };
    } else {
      postParams = {
        authenticationDetails: {
          username: 'aditya',
          password: 'password'
        }
      };
    }
    return postParams;
  }

  handleAPIErrors<T>(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `<i class="material-icons">error</i> ${error.error.message}`;
    } else {
      errorMessage = `<i class="material-icons">error</i> The Server was unable to Handle the request`;
    }
    this.errorModalOpen(errorMessage);
    return throwError(errorMessage);
  }

  errorModalOpen(error: string) {
    this.dialog.open(CommonErrorModalComponent, {
      width: '600px',
      data: error
    });
  }
}
