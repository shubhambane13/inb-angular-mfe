import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService, GlobalTableComponent, GlobalTableData, TableColumn } from 'inb-common-lib';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.html',
  styleUrl: './active-customers.scss',
  standalone: true,
  imports: [GlobalTableComponent],
})
export class ActiveCustomers {
  constructor(
    private _globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getGrid();
  }
  tableData: GlobalTableData = {
    data: [],
    total: 0
  }
  pageIndex = 0;
  pageSize = 5;
  sortDir = 'desc';
  sortBy = 'registrationDate';
  tableConfig: TableColumn[] = [
    { key: 'name', label: 'Name', type: 'link', action: 'view' },
    { key: 'email', label: 'Email' },
    { key: 'registrationDate', label: 'Date', type: 'date' },
  ];

  handleTableAction(event: any) {
    if (event.action === 'view') {
      this.router.navigate(['details'], {
        state: { id: event.data } ,
        relativeTo: this.route
      });
    }
  }

  getGrid() {
    let request = {
      pageNumber: this.pageIndex,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      sortDir: this.sortDir,
    };

    this._globalService
      .postToServer('users/active-customers', request)
      .subscribe((res) => {
        this.tableData = {
          data: res.content,
          total: res.totalElements
        }
      });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getGrid(); // Fetch new data
  }
  
  onSortChange(sortState: Sort) {
    // Angular Material returns 'asc', 'desc', or '' (empty)
    
    if (sortState.direction) {
      this.sortBy = sortState.active;  // The column key (e.g., 'email')
      this.sortDir = sortState.direction;
    } else {
      // If user clears the sort (3rd click), revert to default
      this.sortBy = 'id';
      this.sortDir = 'asc';
    }

    // Reset to first page when sorting changes! (Best Practice)
    this.pageIndex = 0; 
    
    this.getGrid();
  }
}
