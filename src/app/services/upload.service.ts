import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as HttpStatus from 'http-status-codes';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  public SERVER_URL = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {
  }
  public uploadFile(formData) {
    return this.httpClient.post<any>(this.SERVER_URL + '/file-upload', formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
  public getUploadedData(page: string = '0', pageSize: string = '10') {
    return this.httpClient.get<any>(this.SERVER_URL + '/uploaded-data', { params: { page, pageSize } });
  }

  public updateData(dataId, data) {
    return this.httpClient.put<any>(this.SERVER_URL + `/uploaded-data/${dataId}`, data);
  }

  public postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = this.SERVER_URL + '/file-upload';
    const formData: FormData = new FormData();
    formData.append('uploadfile', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData)
      .pipe(
        map(this.extractData),
        catchError(this.handleError.bind(this)),
      );
  }
  private handleError(error: any): any {
    if (error.status === HttpStatus.UNAUTHORIZED) {
      console.error(error);
      return throwError('Unauthorized error.');
    } else if (error.status === HttpStatus.NOT_IMPLEMENTED) {
      console.error(error);
      if (error._body) {
        console.error(error);
        return throwError('Internal server error.');
      }
    } else if (error.status === HttpStatus.INTERNAL_SERVER_ERROR) {
      return throwError('Internal server error.');
    } else if (error.status === HttpStatus.FORBIDDEN) {
      return throwError('Access denied error.');
    } else {
      const errMsg = (error.message) ? error.message : error._body ? error._body :
        error.status ? `${error.status} - ${error.statusText}` : 'Internal server error.';
      console.error(errMsg);
      return throwError(errMsg);
    }
  }
  private extractData(res: HttpResponse<any>): any {
    return res;
  }
}
