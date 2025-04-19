import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard } from './core/Guards/auth.guard';

const routes: Routes = [

  {path : '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: '', component: MainLayoutComponent , children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [authGuard] },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) , canActivate: [authGuard]  },
    { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)  , canActivate: [authGuard] },
    { path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) , canActivate: [authGuard]  },
    { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) , canActivate: [authGuard]  },
    { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) , canActivate: [authGuard]  },
    { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) , canActivate: [authGuard]  },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) , canActivate: [authGuard]  }
  ]},

  { path: '**', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule) },





  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
