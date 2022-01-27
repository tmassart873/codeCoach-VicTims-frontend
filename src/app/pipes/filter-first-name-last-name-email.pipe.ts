import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../user/model/User";

@Pipe({
  name: 'filterFirstNameLastNameEmail'
})
export class FilterFirstNameLastNameEmailPipe implements PipeTransform {

  private MIN_FILTER_LENGTH: number = 2;

  transform(arrayOfCoaches: User[] | null, nameFilter: string):  User[] | null {

    if (nameFilter === undefined ||
      arrayOfCoaches === null ||
      nameFilter === null ||
      nameFilter.length <= this.MIN_FILTER_LENGTH) {
      return arrayOfCoaches;
    }

    return  arrayOfCoaches
      .filter(
        (coach) => coach.firstName.trim().toLocaleLowerCase().includes(nameFilter.trim().toLocaleLowerCase()) ||
          coach.lastName.trim().toLocaleLowerCase().includes(nameFilter.trim().toLocaleLowerCase()) ||
          coach.email.trim().toLocaleLowerCase().includes(nameFilter.trim().toLocaleLowerCase())
      );
  }

}
