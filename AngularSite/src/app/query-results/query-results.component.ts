import { Component, OnInit, Input } from '@angular/core';
import { PinInfoQueryService } from '../pin-info-query.service';
import { PinInfoItem } from '../pin-info-item';

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
        this.displayQueryResults();
    }

    onSelect(pinInfoItem: PinInfoItem): void 
    {
        this.selectedResult = pinInfoItem;
    }

    displayQueryResults(): void 
    {
        this.queryResults = this.pinInfoQueryService.getPinInfoQueryResults();
    }
}
