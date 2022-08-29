import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IResponse } from '../models';
import { MENU } from '../queries/menu';

@Injectable({
  providedIn: 'root',
})
export default class FetchServices {
  constructor(private apollo: Apollo) {}

  private fetchingData(query: any, queryName: string): Observable<any> {
    return this.apollo
      .query({
        query,
      })
      .pipe(
        catchError((err: any) => {
          console.log('Failed to load ', queryName, ': ', err);
          return [];
        }),
        map((result: IResponse) => result.data[queryName])
      );
  }

  getMenu() {
    return this.fetchingData(MENU, 'menu');
  }
}
