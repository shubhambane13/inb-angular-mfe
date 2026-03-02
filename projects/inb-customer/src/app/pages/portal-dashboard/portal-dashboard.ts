import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { WelcomeBannerComponent } from 'inb-common-lib';

@Component({
  selector: 'app-portal-dashboard',
  templateUrl: './portal-dashboard.html',
  styleUrl: './portal-dashboard.scss',
  standalone: true,
  imports: [WelcomeBannerComponent, MatCardModule, MatIconModule, MatDividerModule, MatListModule],
})
export class PortalDashboard {
  lastLoginDate: Date = new Date();
}
