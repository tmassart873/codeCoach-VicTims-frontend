import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../user/model/User";

@Pipe({
  name: 'filterTopics'
})
export class FilterTopicsPipe implements PipeTransform {

  transform(arrayOfCoaches: User[] | null, topicFilter: string): User[] | null {

    if (topicFilter === undefined || arrayOfCoaches === null || topicFilter === null || topicFilter.length === 0) {
      return arrayOfCoaches;
    }

    let coachArrayReturn: User[] = [];

    for (let Coach of arrayOfCoaches) {
      if (Coach.coachInformation?.topics !== undefined) {
        if (Coach.coachInformation?.topics.filter((topic) => topic.name.toLocaleLowerCase().includes(topicFilter.toLocaleLowerCase())).length > 0) {
          coachArrayReturn.push(Coach);
        }
      }
    }

    return coachArrayReturn;
  }
}
