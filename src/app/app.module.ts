import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_mVCScUyhH',
      userPoolClientId: '24gpd336tlp3a2htsdvbgupd94',
    },
  },
});

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAuthenticatorModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
