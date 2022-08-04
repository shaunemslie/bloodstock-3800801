import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobileShellModule } from '@bloodstock/mobile/feature-shell';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AuthState } from '@bloodstock/mobile/shared/data-access/auth';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators
        ? ['http://192.168.0.55:9000']
        : undefined,
    },
  ],
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MobileShellModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgxsModule.forRoot([AuthState]),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: [AuthState],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
