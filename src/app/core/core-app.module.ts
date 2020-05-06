import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material';

import { throwIfAlreadyLoaded } from './module-import-check';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedAppModule } from '../shared';
import { ContextMenuService } from './services/context-menu/context-menu.service';
import { NavigationTopMenuComponent } from './components/navigation-top-menu/navigation-top-menu.component';
import { NavigationLeftMenuComponent } from './components/navigation-left-menu/navigation-left-menu.component';
import { DeviceScreenSizeService } from './services/device-screen-size/device-screen-size.service';
import { TimeSlotValidationService } from './services/time-slot-validation/time-slot-validation.service';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationTopMenuComponent,
    NavigationLeftMenuComponent
  ],
  imports: [
    SharedAppModule,
    RouterModule,
    MatMenuModule,
  ],
  providers: [
    ContextMenuService,
    DeviceScreenSizeService,
    TimeSlotValidationService
  ],
  exports: [
    DashboardComponent,
    NavigationTopMenuComponent
  ]
})

export class CoreAppModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreAppModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreAppModule');
  }
}
