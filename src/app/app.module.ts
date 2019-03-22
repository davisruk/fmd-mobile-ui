import { PackListEffects } from './store/effects/pack-list-effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FmdNavComponent } from './components/fmd-nav/fmd-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/reducers/app.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { BagBuilderPageComponent } from './components/bag-builder-page/bag-builder-page.component';
import { BagPackListComponent } from './components/bag-pack-list/bag-pack-list.component';
import { PackDetailComponent } from './components/pack-detail/pack-detail.component';
import { BagResultsPageComponent } from './bag-results-page/bag-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FmdNavComponent,
    BagBuilderPageComponent,
    BagPackListComponent,
    PackDetailComponent,
    BagResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PackListEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
