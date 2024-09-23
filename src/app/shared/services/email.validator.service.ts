import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    const observable = new Observable<ValidationErrors|null>((subscriber) => {

      if(email == 'ronn.zp.3@gmail.com') {
        subscriber.next({emailInvalid: true});
        subscriber.complete();
        return;
      }

      subscriber.next(null);
      subscriber.complete();
    });

    return observable.pipe(
      delay(2000)
    );

  }

}
