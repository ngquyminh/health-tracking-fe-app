import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity, ResponseActivityList } from 'src/app/components/modal/my-modal/activity.model';

type EntityResponseType = HttpResponse<IActivity>;
type EntityArrayResponseType = HttpResponse<IActivity[]>;
type EntityArrayResponseType2 = HttpResponse<ResponseActivityList>;

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  resourceUrl() {
    return 'http://localhost:3000/activity';
  }

  constructor(protected http: HttpClient) {}

  create(activity: IActivity): Observable<EntityResponseType> {
    return this.http.post<IActivity>(`${this.resourceUrl()}/add`, activity, {
      observe: 'response',
    });
  }

  update(activity: IActivity): Observable<EntityResponseType> {
    return this.http.put<IActivity>(`${this.resourceUrl()}/edit`, activity, {
      observe: 'response',
    });
  }

  getAtivitiesByTypeInTimeRange(
    req?: any
  ): Observable<EntityArrayResponseType2> {
    return this.http.get<ResponseActivityList>(
      `${this.resourceUrl()}/getByTypeInTimeInterval`,
      { params: req, observe: 'response' }
    );
  }

  getActivityById(req?: any): Observable<EntityResponseType> {
    return this.http.get<IActivity>(
      `${this.resourceUrl()}/get`, {
        params: req,
        observe: 'response'
      })
  }

  getAllActivities(req: any): Observable<EntityArrayResponseType2> {
    return this.http.get<ResponseActivityList>(
      `${this.resourceUrl()}/getAll`,
      { params: req, observe: 'response' }
    );
  }

  getActivitiesByUserIdAndType(req: any): Observable<EntityArrayResponseType2> {
    return this.http.get<ResponseActivityList>(`${this.resourceUrl()}/getByType`, {
      params: req,
      observe: 'response',
    });
  }
}
