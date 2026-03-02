import { Routes } from '@angular/router';

export const routes: Routes = [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./pages/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard),
      },
      { 
        path: 'active-customers',
        children: [
            {
                path: '', 
                loadComponent: () => import('./pages/active-customers/active-customers').then(m => m.ActiveCustomers),
            },
            {
                // 2. The Detail Page (matches /admin/pending-customers/101)
                path: 'details', 
                loadComponent: () => import('./pages/active-customers/active-customer-details/active-customer-details').then(m => m.ActiveCustomerDetails),
            }
        ]
        
      },
      { 
        path: 'pending-customers', 
        children: [
            {
                path: '', 
                loadComponent: () => import('./pages/pending-customers/pending-customers').then(m => m.PendingCustomers),
            },
            {
                // 2. The Detail Page (matches /admin/pending-customers/101)
                path: 'details', 
                loadComponent: () => import('./pages/pending-customers/pending-customer-detail/pending-customer-detail').then(m => m.PendingCustomerDetail),
            }
        ]
      },
      { 
        path: 'locked-customers', 
        children: [
            {
                path: '', 
                loadComponent: () => import('./pages/locked-customers/locked-customers').then(m => m.LockedCustomers),
            },
            {
                // 2. The Detail Page (matches /admin/pending-customers/101)
                path: 'details', 
                loadComponent: () => import('./pages/locked-customers/locked-customer-detail/locked-customer-detail').then(m => m.LockedCustomerDetail),
            }
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' }
    ];
