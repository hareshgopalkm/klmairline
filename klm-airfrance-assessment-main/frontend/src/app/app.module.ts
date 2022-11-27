import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { AppComponent } from './app.component';
import { AppBookingDetailsPageComponent } from './booking-details-page/booking-details-page.component';
import { AppBookingDetailsPageModule } from './booking-details-page/booking-details-page.module';
import { AppCheckInPageComponent } from './check-in-page/check-in-page.component';
import { AppCheckInPageModule } from './check-in-page/check-in-page.module';
import { AppHeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri: 'http://localhost:4000'}),
    cache: new InMemoryCache(),
  };
}

const routes: Routes = [
  {path: 'check-in', component: AppCheckInPageComponent},
  {path: 'booking-details', component: AppBookingDetailsPageComponent},
  {path: '**', component: AppCheckInPageComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    AppHeaderModule,
    AppCheckInPageModule,
    AppBookingDetailsPageModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
