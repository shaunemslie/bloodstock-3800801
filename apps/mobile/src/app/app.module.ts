import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobileShellModule } from '@bloodstock/mobile/feature-shell';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonIcon: 'arrow-back',
      backButtonText: '',
      refreshingIcon: 'circles',
      refreshingSpinner: 'circles',
      infiniteLoadingSpinner: 'crescent',
      swipeBackEnabled: true,
      tabButtonLayout: 'icon-top',
    }),
    MobileShellModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
