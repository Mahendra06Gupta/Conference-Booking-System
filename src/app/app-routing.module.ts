import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { MainRoutes } from '@app/app.route-names';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ]
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    canActivateChild: [AuthenticatedGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'booking',
            loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
          },
          {
            path: MainRoutes.conference,
            loadChildren: () => import('@app/booking/components/conference/conference.module').then(m => m.ConferenceModule)
          },
        ]
      }
    ]
  },
];

@NgModule({
  providers: [
    AuthenticatedGuard
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
