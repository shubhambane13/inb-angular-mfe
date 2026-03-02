import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService, HeaderComponent, SidebarComponent } from 'inb-common-lib';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    HeaderComponent,  
    SidebarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class ProtectedLayout {
  protected readonly title = signal('inb-protected');
  private breakpointObserver = inject(BreakpointObserver);
  
  // adminMenu: any = [
  //   {
  //     type: "MENU",
  //     menuName: "Dashboard",
  //     menuRoute: "./admin/dashboard",
  //     menuIcon: "dashboard"
  //   },
  //   {
  //     type: "HEADER",
  //     headetName: "Customer Management"
  //   },
  //   {
  //     type: "MENU",
  //     menuName: "Active Customer",
  //     menuRoute: "./admin/active-customers",
  //     menuIcon: "group"
  //   },
  //   {
  //     type: "MENU",
  //     menuName: "Pending Approvals",
  //     menuRoute: "./admin/pending-customers",
  //     menuIcon: "verified_user"
  //   },
  //   {
  //     type: "MENU",
  //     menuName: "Locked Customer",
  //     menuRoute: "./admin/locked-customers",
  //     menuIcon: "lock"
  //   },
  // ]
  adminMenu: any = [
    {
      type: "MENU",
      menuName: "Dashboard",
      menuRoute: "./customer/dashboard",
      menuIcon: "dashboard"
    },
    {
      type: "HEADER",
      headetName: "Customer Management"
    },
    {
      type: "MENU",
      menuName: "Account Summary",
      menuRoute: "./customer/account-summary",
      menuIcon: "account_balance_wallet"
    },
    {
      type: "MENU",
      menuName: "Account Statements",
      menuRoute: "./customer/account-statement",
      menuIcon: "receipt_long"
    },
    {
      type: "MENU",
      menuName: "Open New Account",
      menuRoute: "./customer/open-new-account",
      menuIcon: "add_card"
    },
    {
      type: "HEADER",
      headetName: "Transfers"
    },
    {
      type: "MENU",
      menuName: "Transfer Funds",
      menuRoute: "./customer/transfer-funds",
      menuIcon: "compare_arrows"
    },
    {
      type: "HEADER",
      headetName: "Bill Payments"
    },
    {
      type: "MENU",
      menuName: "Pay Bill",
      menuRoute: "./customer/pay-bill",
      menuIcon: "receipt"
    },
    {
      type: "MENU",
      menuName: "Scheduled Payments",
      menuRoute: "./customer/scheduled-payments",
      menuIcon: "event_repeat"
    },
    {
      type: "HEADER",
      headetName: "Cheques"
    },
    {
      type: "MENU",
      menuName: "Deposit Cheque",
      menuRoute: "./customer/deposit-cheque",
      menuIcon: "upload_file"
    },
    {
      type: "MENU",
      menuName: "Track Status",
      menuRoute: "./customer/track-cheque-status",
      menuIcon: "query_stats"
    },
    {
      type: "HEADER",
      headetName: "Fixed Deposits"
    },
    {
      type: "MENU",
      menuName: "Open New FD",
      menuRoute: "./customer/new-fd",
      menuIcon: "trending_up"
    },
    {
      type: "MENU",
      menuName: "My FDs",
      menuRoute: "./customer/my-fds",
      menuIcon: "savings"
    },
  ];

  // Observable to detect if screen is mobile (Handset)
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
