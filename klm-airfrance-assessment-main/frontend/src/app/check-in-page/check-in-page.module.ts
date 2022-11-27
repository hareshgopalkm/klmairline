import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { AppContentModule } from '../content/content.module';
import { AppHeaderModule } from '../header/header.module';
import { AppCheckInPageComponent } from './check-in-page.component';
import { AppCheckInPageService } from './check-in-page.service';


@NgModule({
  declarations: [AppCheckInPageComponent],
  imports: [CommonModule, AppContentModule, AppHeaderModule, ReactiveFormsModule, ApolloModule, RouterModule],
  providers: [AppCheckInPageService],
  exports: [AppCheckInPageComponent]
})
export class AppCheckInPageModule {}
