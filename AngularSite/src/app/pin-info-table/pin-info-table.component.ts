import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PinInfoTableDataSource } from './pin-info-table-datasource';
import { PinInfoItem } from '../pin-info-item';

@Component({
  selector: 'app-pin-info-table',
  templateUrl: './pin-info-table.component.html',
  styleUrls: ['./pin-info-table.component.css']
})
export class PinInfoTableComponent implements AfterViewInit, OnInit 
{
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<PinInfoItem>;
    dataSource: PinInfoTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'armPin', 'registerAddress', 'defaultMode'];

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

    displayQueryResults(pinInfoItems: PinInfoItem[]) : void
    {
        this.dataSource.data = pinInfoItems;  
        this.paginator._changePageSize(this.paginator.pageSize); 
    }
}
