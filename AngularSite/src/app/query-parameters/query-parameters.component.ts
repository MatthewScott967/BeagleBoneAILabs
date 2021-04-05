import { Component, OnInit } from '@angular/core';
import { PinInfoQueryService } from '../pin-info-query.service';
import { ViewChild } from '@angular/core';
import { PinInfoTableComponent } from '../pin-info-table/pin-info-table.component'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PinInfoItem } from '../pin-info-item';

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

    @ViewChild(PinInfoTableComponent)
    private pinInfoTableComponent?: PinInfoTableComponent;

    pinControl = new FormControl();
    pinOptions: string[] = [];
    filteredPinOptions: Observable<string[]>;

    signalControl = new FormControl();
    signalOptions: string[] = [];
    filteredSignalOptions: Observable<string[]>;

    public selectedPinInTable: PinInfoItem;

    constructor(private pinInfoQueryService: PinInfoQueryService)
    {
    }

    ngOnInit(): void 
    {
        this.getAllPinInfoItems();

        this.filteredPinOptions = this.pinControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterPin(value))
        );

        this.filteredSignalOptions = this.signalControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterSignal(value))
        );
    }

    getAllPinInfoItems(): void
    {
        this.pinInfoQueryService.performPinInfoQueryAll()
            .subscribe(pinInfoItems => 
            {
                if (this.pinInfoTableComponent)
                {
                    this.pinInfoTableComponent.displayQueryResults(pinInfoItems);
                }

                this._updateAutoCompleteOptions(pinInfoItems);
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
                if (this.pinInfoTableComponent)
                {
                    this.pinInfoTableComponent.displayQueryResults(pinInfoItems);
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
                if (this.pinInfoTableComponent)
                {
                    this.pinInfoTableComponent.displayQueryResults(pinInfoItems);
                }
            });
    }

    updateSelectionInTable(pin: PinInfoItem) : void
    {
        this.selectedPinInTable = pin;
    }

    private _updateAutoCompleteOptions(pinInfoItems: PinInfoItem[]) : void
    {
        this.pinOptions.length = 0;
        this.signalOptions.length = 0;

        pinInfoItems.forEach(pinInfoItem => 
        {
            this.pinOptions.push(pinInfoItem.id);
            
            if (pinInfoItem.mode00Signal !== "") { this.signalOptions.push(pinInfoItem.mode00Signal) };
            if (pinInfoItem.mode01Signal !== "") { this.signalOptions.push(pinInfoItem.mode01Signal) };
            if (pinInfoItem.mode02Signal !== "") { this.signalOptions.push(pinInfoItem.mode02Signal) };
            if (pinInfoItem.mode03Signal !== "") { this.signalOptions.push(pinInfoItem.mode03Signal) };
            if (pinInfoItem.mode04Signal !== "") { this.signalOptions.push(pinInfoItem.mode04Signal) };
            if (pinInfoItem.mode05Signal !== "") { this.signalOptions.push(pinInfoItem.mode05Signal) };
            if (pinInfoItem.mode06Signal !== "") { this.signalOptions.push(pinInfoItem.mode06Signal) };
            if (pinInfoItem.mode07Signal !== "") { this.signalOptions.push(pinInfoItem.mode07Signal) };
            if (pinInfoItem.mode08Signal !== "") { this.signalOptions.push(pinInfoItem.mode08Signal) };
            if (pinInfoItem.mode09Signal !== "") { this.signalOptions.push(pinInfoItem.mode09Signal) };
            if (pinInfoItem.mode10Signal !== "") { this.signalOptions.push(pinInfoItem.mode10Signal) };
            if (pinInfoItem.mode11Signal !== "") { this.signalOptions.push(pinInfoItem.mode11Signal) };
            if (pinInfoItem.mode12Signal !== "") { this.signalOptions.push(pinInfoItem.mode12Signal) };
            if (pinInfoItem.mode13Signal !== "") { this.signalOptions.push(pinInfoItem.mode13Signal) };
            if (pinInfoItem.mode15Signal !== "") { this.signalOptions.push(pinInfoItem.mode14Signal) };
            if (pinInfoItem.mode15Signal !== "") { this.signalOptions.push(pinInfoItem.mode15Signal) };
        });

        this.pinControl.enable();
        this.signalControl.enable();
    }

    private _filterPin(value: string): string[] 
    {
        if (!value)
        {
            value = "";
        }

        const filterValue = value.toLowerCase();

        return this.pinOptions.filter(option => option.toLowerCase().includes(filterValue));
    }
  
    private _filterSignal(value: string): string[] 
    {
        if (!value)
        {
            value = "";
        }

        console.log(`signal option length: ${this.signalOptions.length}`)

        const filterValue = value.toLowerCase();

        return this.signalOptions.filter(option => option.toLowerCase().includes(filterValue));
    }
}
