import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Booking } from '../../graphql/generated';
import { CheckInPageForm } from './check-in-page.model';

const CAN_FIND_BOOKING = gql`
  query BookingQuery($bookingCode: String!, $familyName: String!) {
    getBooking(bookingCode: $bookingCode, familyName: $familyName) {
      bookingCode
    }
  }
`;

@Injectable()
export class AppCheckInPageService {

  constructor(private apolloClient: Apollo) {
  }

  getFormGroup(): FormGroup<CheckInPageForm> {
    return new FormGroup<CheckInPageForm>({
      bookingCode: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(6),
          Validators.pattern(/^[a-zA-Z2-9]*$/)
        ]
      }),
      familyName: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      })
    })
  }

   getBooking(bookingCode: string, familyName: string): Observable<ApolloQueryResult<Booking>> {
    return this.apolloClient.query<Booking>({
      query: CAN_FIND_BOOKING,
      errorPolicy: 'all',
      variables: {
        bookingCode: bookingCode,
        familyName: familyName
      }
    });
  }
}
