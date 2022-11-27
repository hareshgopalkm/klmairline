import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../../graphql/generated';
import { AppBookingDetailsPageService } from './booking-details-page.service';

@Component({
  selector: 'app-booking-details-page',
  templateUrl: './booking-details-page.component.html',
  styleUrls: ['./booking-details-page.component.scss']
})
export class AppBookingDetailsPageComponent implements OnInit {
  public booking: Booking | undefined;

  constructor(
    private readonly bookingDetailsPageService: AppBookingDetailsPageService,
    private readonly router: Router) {
  }

  public ngOnInit(): void {
    const bookingCode = window.localStorage.getItem('bookingCode');
    const familyName = window.localStorage.getItem('familyName');
    if(!bookingCode || !familyName) {
      this.router.navigate(['check-in']);
      return;
    }
    this.bookingDetailsPageService.getBooking(bookingCode, familyName)
      .subscribe(response => {
        if(response.errors?.length || !response.data) {
          this.router.navigate(['check-in']);
        } else {
          this.booking = response.data.getBooking;
        }
      });
  }
}
