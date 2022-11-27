import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { CheckInPageForm } from './check-in-page.model';
import { AppCheckInPageService } from './check-in-page.service';

@Component({
  selector: 'app-check-in-page',
  templateUrl: './check-in-page.component.html',
  styleUrls: ['./check-in-page.component.scss']
})
export class AppCheckInPageComponent {
  public form: FormGroup<CheckInPageForm> = this.appCheckinPageService.getFormGroup();
  errorMessage:string = '';
  public bookingError: 'unavailable' | 'not_found' | 'unknown' | null = null;
  get bookingFormControl():FormControl{
    return this.form.controls.bookingCode as FormControl;
  }
  get familyNameFormControl():FormControl{
    return this.form.controls.familyName as FormControl;
  }

  constructor(
    private readonly appCheckinPageService: AppCheckInPageService,
    private readonly router: Router) {
  }

  public submit(): void {
    this.form.markAllAsTouched();
    this.form.markAsDirty();

    if(this.form.valid) {
      const bookingCode = this.form.value.bookingCode as string;
      const familyName = this.form.value.familyName as string;
      this.bookingError = null;
      this.appCheckinPageService.getBooking(
        this.form.value.bookingCode as string,
        this.form.value.familyName as string
      ).pipe(catchError((err) => {
        this.bookingError = 'unknown';
        throw err;
      })).subscribe(response => {
        if(response.errors?.length) {
          const code = response.errors[0]?.extensions['code'];
          switch(code) {
            case 'BOOKING_NOT_FOUND':
              this.bookingError = 'not_found'; break;
            case 'BOOKING_DATASOURCE_UNAVAILABLE':
              this.bookingError = 'unavailable'; break;
            default:
              this.bookingError = 'unknown'; break;
          }
        } else {
          window.localStorage.setItem('bookingCode', bookingCode);
          window.localStorage.setItem('familyName', familyName);
          this.router.navigate(['booking-details']);
        }
      });
    }
  }


}
