import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-datalistpage',
  templateUrl: './datalistpage.component.html',
  styleUrls: ['./datalistpage.component.scss'],
})
export class DatalistpageComponent implements OnInit {

  constructor(private uploadService: UploadService) { }
  public displayedColumns: string[] = ['id', 'level', 'cvss', 'title', 'vulnerability', 'solution', 'reference'];
  public dataSource = new MatTableDataSource<IPeriodicElement>(ELEMENT_DATA);
  public pageEvent: PageEvent;
  public datasource: null;
  public pageSize: number;
  public pageLength: number;
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  public ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getUploadedData();
  }

  public getUploadedData(event?) {
    this.uploadService.getUploadedData(event?.pageIndex, event?.pageSize).subscribe((res) => {
      this.dataSource = res.data.rows;
      this.pageLength = res.data.count;
    }, (err) => {
      console.log(err.message);
    });
  }

}
export interface IPeriodicElement {
  id: number;
  level: string;
  cvss: number;
  title: number;
  vulnerability: string;
  solution: string;
  reference: string;
}

const ELEMENT_DATA: IPeriodicElement[] = [];
