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
    queryResults: Array<PinInfoItem> = [];
    queryParameter: string = "";

    private pinInfoItemUrl = 'https://localhost:5001/api/PinInfoItems';

    constructor(private http: HttpClient) 
    {
    }

    getPinInfoQueryResults(): PinInfoItem[] 
    {
        return this.queryResults;
    }

    performPinInfoQuery(queryString: string) : void
    {
        this.queryParameter = queryString;

        // const url = `${this.pinInfoItemUrl}?pinName=${this.queryParameter}`;
        // 
        // return this.http.get<PinInfoItem[]>(url)
        //    .pipe(catchError(this.handleError<PinInfoItem[]>('getPinInfoQueryResults', [])));

        this.queryResults[0] = 
        {
            pin : "sysboot 0",
            address : "0x1400",
            armPin : "M6",
            defaultMode : 0,
            mode00Signal : "gpmc_ad0",
            mode01Signal : "",
            mode02Signal : "vin3a_d0",
            mode03Signal : "vout3_d0",
            mode04Signal : "",
            mode05Signal : "",
            mode06Signal : "",
            mode07Signal : "",
            mode08Signal : "",
            mode09Signal : "",
            mode10Signal : "",
            mode11Signal : "",
            mode12Signal : "",
            mode13Signal : "",
            mode14Signal : "gpio1_6",
            mode15Signal : "sysboot0"
        };

        this.queryResults[1] = 
        {
            pin : "sysboot 1",
            address : "0x1404",
            armPin : "M7",
            defaultMode : 0,
            mode00Signal : "gpmc_ad0",
            mode01Signal : "",
            mode02Signal : "vin3a_d0",
            mode03Signal : "vout3_d0",
            mode04Signal : "",
            mode05Signal : "",
            mode06Signal : "",
            mode07Signal : "",
            mode08Signal : "",
            mode09Signal : "",
            mode10Signal : "",
            mode11Signal : "",
            mode12Signal : "",
            mode13Signal : "",
            mode14Signal : "gpio1_6",
            mode15Signal : "sysboot0"
        };
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
