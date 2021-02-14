import { Component, OnInit, Input } from '@angular/core';
import { PinInfoItem } from '../pin-info-item';

@Component({
  selector: 'app-selected-query-result',
  templateUrl: './selected-query-result.component.html',
  styleUrls: ['./selected-query-result.component.css']
})

export class SelectedQueryResultComponent implements OnInit 
{
    @Input() selectedPin?: PinInfoItem;

    constructor() 
    {
    }

    ngOnInit(): void 
    {
    }
}
