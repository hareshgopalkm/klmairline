import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Query } from '../../graphql/generated';

import { FULL_BOOKING } from './booking-details-page.query';

@Injectable()
export class AppBookingDetailsPageService {

  constructor(private apolloClient: Apollo) {
  }

  public getBooking(bookingCode: string, familyName: string): Observable<ApolloQueryResult<Query>> {
    return this.apolloClient.query<Query>({
      query: FULL_BOOKING,
      errorPolicy: 'all',
      variables: {
        bookingCode: bookingCode,
        familyName: familyName
      }
    });
  }
}
