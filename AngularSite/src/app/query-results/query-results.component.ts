import { Component, OnInit, Input } from '@angular/core';
import { PinInfoQueryService } from '../pin-info-query.service';
import { PinInfoItem } from '../pin-info-item';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

@Component({
    selector: 'app-query-results',
    templateUrl: './query-results.component.html',
    styleUrls: ['./query-results.component.css']
})

export class QueryResultsComponent implements OnInit 
{
    queryResults?: PinInfoItem[];
    selectedResult?: PinInfoItem;

    @Input() queryParameter? : string;

    constructor(private pinInfoQueryService: PinInfoQueryService)
    {
    }

    ngOnInit(): void 
    {
    }

    onSelect(pinInfoItem: PinInfoItem): void 
    {
        this.selectedResult = pinInfoItem;
    }

    displayQueryResults(queryResults: PinInfoItem[]): void 
    {
        this.queryResults = queryResults;

        if (this.queryResults.length > 0)
        {
            this.selectedResult = this.queryResults[0];
        }
        else
        {
            this.selectedResult = undefined;
        }
    }
}
