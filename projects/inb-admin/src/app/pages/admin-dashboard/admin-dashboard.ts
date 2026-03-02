import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { GlobalService, WelcomeBannerComponent } from 'inb-common-lib';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
  standalone: true,
  imports: [
    WelcomeBannerComponent,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class AdminDashboard {
  stats:any = {}
  constructor(private _globalService: GlobalService) {}

  ngOnInit() {
    this.getDashBoardStats();
  }

  getDashBoardStats() {
    this._globalService.postToServer('users/dashboard-stats',{}).subscribe(res => {
      this.stats = res;
    });
  }
}
