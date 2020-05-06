import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { environment } from '../environments/environment';
import { rootStoreMetaReducer } from './store/store.reducer';
import { ROOT_EFFECTS, ROOT_REDUCERS } from './store/store';
import { SharedAppModule } from './shared';
import { CoreAppModule } from './core';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers: [rootStoreMetaReducer]}),
    EffectsModule.forRoot(ROOT_EFFECTS),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    SharedAppModule,
    CoreAppModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
