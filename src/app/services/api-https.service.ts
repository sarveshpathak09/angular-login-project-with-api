import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ResponseStatusCode } from '../baseapi/responseStatusCode';
import Swal from 'sweetalert2';
import { BaseApiUrl } from '../baseapi/baseAPIUrl';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpsService {

  constructor(
    private http: HttpClient
  ) { }


  /**  Constructs a new HTTP header object.
  * @return An `Object` of the HttpHeaders.
  */
  private getHeaders = (): HttpHeaders => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'authorization': accessToken ? 'bearer ' + accessToken : '',
      'Content-Type': 'application/json'
    });

    return headers;
  }

  /**  Constructs a new HTTP header object for get data.
* @return An `Object` of the HttpHeaders.
*/
  private getHeadersGetData = (): HttpHeaders => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'authorization': accessToken ? 'bearer ' + accessToken : '',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return headers;
  }

  /**  Constructs a new HTTP header object for form data.
  * @return An `Object` of the HttpHeaders.
  */
  private getHeadersFormData = (): HttpHeaders => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      'authorization': accessToken ? 'bearer ' + accessToken : ''
    });

    return headers;
  }

  /** 
  * This method is being called whenever HTTP method throw error.
  * @param (Error of Http Error Response)
  * @return An `Observable` of the throwError.
  */
  private errorHandler(error: HttpErrorResponse) {
    if (error.status == ResponseStatusCode.UNAUTHORIZED) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('roles');
    }
    Swal.fire({
      title: error.error.message,
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'uk-animation-slide-top-small'
      },
      confirmButtonColor: '#542581'
    });

    return throwError(error.error);
  }


  /**
   * @method (post http request)
   * @param url (api url)
   * @param data (data which we have to pass to server directly without formdata and data is optional)
   * 
   * @return An `Observable` of the response.
   */
  postData(url: string, data?: any): Observable<any> {
    const apiUrl = `${BaseApiUrl.URL}${url}`;

    return this.http.post(apiUrl, data, { headers: this.getHeaders() }).pipe(map((response: any) => {
      return response;
    }), catchError(this.errorHandler));

  }


}
