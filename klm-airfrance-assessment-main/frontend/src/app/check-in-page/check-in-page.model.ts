import { FormControl } from '@angular/forms';

export interface CheckInPageForm {
  bookingCode: FormControl<string | null>;
  familyName: FormControl<string | null>;
}
