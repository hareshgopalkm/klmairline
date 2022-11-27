import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { AppContentModule } from '../content/content.module';
import { AppHeaderModule } from '../header/header.module';
import { AppBookingDetailsPageComponent } from './booking-details-page.component';
import { AppBookingDetailsPageService } from './booking-details-page.service';

@NgModule({
  declarations: [AppBookingDetailsPageComponent],
  imports: [
    CommonModule,
    AppContentModule,
    AppHeaderModule,
    ApolloModule,
    RouterModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [AppBookingDetailsPageComponent],
  providers: [AppBookingDetailsPageService]
})
export class AppBookingDetailsPageModule {
}
