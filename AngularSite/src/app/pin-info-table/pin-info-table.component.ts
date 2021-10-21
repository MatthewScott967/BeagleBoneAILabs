import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PinInfoTableDataSource } from './pin-info-table-datasource';
import { PinInfoItem } from '../pin-info-item';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-pin-info-table',
  templateUrl: './pin-info-table.component.html',
  styleUrls: ['./pin-info-table.component.css']
})
export class PinInfoTableComponent implements AfterViewInit, OnInit 
{
    @Output() updateSelection = new EventEmitter<PinInfoItem>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<PinInfoItem>;
    dataSource: PinInfoTableDataSource;
    selection = new SelectionModel<PinInfoItem>(false, []);

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'armPin', 'registerAddress'];

    ngOnInit() 
    {
        this.dataSource = new PinInfoTableDataSource();
    }

    ngAfterViewInit() 
    {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }

    onSelect(pin: PinInfoItem) : void
    {
        this.selection.toggle(pin);
        this.updateSelection.emit(pin);
    }

    displayQueryResults(pinInfoItems: PinInfoItem[]) : void
    {
        this.dataSource.data = pinInfoItems;  
        this.paginator._changePageSize(this.paginator.pageSize); 
    }
}
