import { NgModule } from '@angular/core';
import { MobileShellRouting } from './feature-shell.routing';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@bloodstock/mobile/shared/data-access/auth';

@NgModule({
  imports: [
    CommonModule,
    MobileShellRouting,
    NgxsModule.forRoot(),
    HttpClientModule,
    AuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class MobileShellModule {}
