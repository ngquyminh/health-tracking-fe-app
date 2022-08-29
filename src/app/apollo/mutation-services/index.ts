import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IMutationResponse } from '../models';
import { IAddFoodInput } from '../models/mutations';
import { ADD_FOOD } from '../mutations/menu';

@Injectable({
  providedIn: 'root',
})
export default class MutationServices {
  constructor(private apollo: Apollo) {}

  private handleData(
    mutation: any,
    mutationName: string,
    variables: any
  ): Observable<IMutationResponse> {
    return this.apollo
      .mutate({
        mutation,
        variables,
      })
      .pipe(
        catchError((err) => {
          console.log('Failed to handle ', mutationName, ': ', err);
          return err;
        })
      )
      .pipe(map((result: any) => result));
  }

  handleAddFood(data: IAddFoodInput[] = []) {
    return this.handleData(ADD_FOOD, 'addFood', {input: data});
  }
}
