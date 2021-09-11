import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PinInfoItem } from './pin-info-item';

@Injectable({
    providedIn: 'root'
})
export class PinInfoQueryService 
{
    queryParameter: string = "";

    private pinInfoItemUrl = 'http://pininfo-api:5000/api/PinInfoItems';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) 
    {
    }

    performPinInfoQueryAll() : Observable<PinInfoItem[]>
    {
        const url = `${this.pinInfoItemUrl}`;
         
        return this.http.get<PinInfoItem[]>(url)
            .pipe(catchError(this.handleError<PinInfoItem[]>('getPinInfoQueryResults', [])));
    }

    performPinInfoQuery(queryString: string) : Observable<PinInfoItem[]>
    {
        this.queryParameter = queryString;

        const url = `${this.pinInfoItemUrl}?pinName=${this.queryParameter}`;
         
        return this.http.get<PinInfoItem[]>(url)
            .pipe(catchError(this.handleError<PinInfoItem[]>('getPinInfoQueryResults', [])));
    }

    performPinInfoSignalQuery(queryString: string) : Observable<PinInfoItem[]>
    {
        this.queryParameter = queryString;

        const url = `${this.pinInfoItemUrl}?signalName=${this.queryParameter}`;
         
        return this.http.get<PinInfoItem[]>(url)
            .pipe(catchError(this.handleError<PinInfoItem[]>('getPinInfoQueryResults', [])));
    }

    private handleError<T>(operation = 'operation', result?: T) 
    {
        return (error: any): Observable<T> => 
        {
            console.error(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
