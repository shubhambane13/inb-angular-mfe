import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/portal-dashboard/portal-dashboard').then(
        (m) => m.PortalDashboard,
      ),
  },
  {
    path: 'account-summary',
    loadComponent: () =>
      import('./pages/account-summary/account-summary').then(
        (m) => m.AccountSummary,
      ),
  },
  {
    path: 'account-statement',
    loadComponent: () =>
      import('./pages/account-statement/account-statement').then(
        (m) => m.AccountStatement,
      ),
  },
  {
    path: 'open-new-account',
    loadComponent: () =>
      import('./pages/open-new-account/open-new-account').then(
        (m) => m.OpenNewAccount,
      ),
  },
  {
    path: 'transfer-funds',
    loadComponent: () =>
      import('./pages/transfer-funds/transfer-funds').then(
        (m) => m.TransferFundsComponent,
      ),
  },
  {
    path: 'pay-bill',
    loadComponent: () =>
      import('./pages/pay-bill/pay-bill').then((m) => m.PayBillComponent),
  },
  {
    path: 'scheduled-payments',
    loadComponent: () =>
      import('./pages/scheduled-payments/scheduled-payments').then(
        (m) => m.ScheduledPaymentsComponent,
      ),
  },
  {
    path: 'deposit-cheque',
    loadComponent: () =>
      import('./pages/deposit-cheque/deposit-cheque').then(
        (m) => m.DepositChequeComponent,
      ),
  },
  {
    path: 'track-cheque-status',
    loadComponent: () =>
      import('./pages/track-cheque-status/track-cheque-status').then(
        (m) => m.TrackChequeStatusComponent,
      ),
  },
  {
    path: 'new-fd',
    loadComponent: () =>
      import('./pages/open-new-fd/open-new-fd').then(
        (m) => m.OpenNewFdComponent,
      ),
  },
  {
    path: 'my-fds',
    loadComponent: () =>
      import('./pages/my-fds/my-fds').then((m) => m.MyFdsComponent),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
