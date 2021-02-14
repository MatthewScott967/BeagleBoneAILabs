import { Component, OnInit } from '@angular/core';
import { PinInfoQueryService } from '../pin-info-query.service';

@Component({
    selector: 'app-query-parameters',
    templateUrl: './query-parameters.component.html',
    styleUrls: ['./query-parameters.component.css']
})

export class QueryParametersComponent implements OnInit 
{
    queryPin: string = "";
    querySignal: string = "";
    
    queryParameter?: string;

    constructor(private pinInfoQueryService: PinInfoQueryService)
    {
    }

    ngOnInit(): void 
    {
    }

    onClick(queryString: string): void 
    {
        this.queryParameter = queryString;
        this.pinInfoQueryService.performPinInfoQuery(queryString);

        //this.pinInfoQueryService.getPinInfoQueryResults(queryString)
        //    .subscribe(pinInfoItems => 
        //    {
        //        this.queryResults = pinInfoItems; 
        //        this.selectedResult = this.queryResults[0]
        //    });
    }
}
