import { Component, OnInit } from '@angular/core';
import { PinInfoQueryService } from '../pin-info-query.service';
import { ViewChild } from '@angular/core';
import { QueryResultsComponent } from '../query-results/query-results.component'

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

    @ViewChild(QueryResultsComponent)
    private queryResultsComponent?: QueryResultsComponent;

    constructor(private pinInfoQueryService: PinInfoQueryService)
    {
    }

    ngOnInit(): void 
    {
        this.getAllPinInfoItems();
    }

    getAllPinInfoItems(): void
    {
        this.pinInfoQueryService.performPinInfoQueryAll()
            .subscribe(pinInfoItems => 
            {
                if (this.queryResultsComponent)
                {
                    this.queryParameter = "ALL"
                    this.queryResultsComponent.displayQueryResults(pinInfoItems); 
                }
            });
    }

    pinSearch(queryPin: string): void 
    {
        if (!queryPin)
        {
            this.getAllPinInfoItems();
            return;
        }

        this.queryParameter = queryPin;
        this.pinInfoQueryService.performPinInfoQuery(queryPin)
            .subscribe(pinInfoItems => 
            {
                if (this.queryResultsComponent)
                {
                    this.queryResultsComponent.displayQueryResults(pinInfoItems); 
                }
            });
    }

    signalSearch(querySignal: string): void 
    {
        if (!querySignal)
        {
            this.getAllPinInfoItems();
            return;
        }

        this.queryParameter = querySignal;
        this.pinInfoQueryService.performPinInfoSignalQuery(querySignal)
            .subscribe(pinInfoItems => 
            {
                if (this.queryResultsComponent)
                {
                    this.queryResultsComponent.displayQueryResults(pinInfoItems); 
                }
            });
    }

    
}
