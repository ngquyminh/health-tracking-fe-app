import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/components/modal/my-modal/user.model';

type EntityResponseType = HttpResponse<IUser>;
type EntityArrayResponseType = HttpResponse<IUser[]>;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  resourceUrl() {
    return 'http://localhost:3000/user';
  }

  constructor(protected http: HttpClient) {}

  create(user: IUser): Observable<EntityResponseType> {
    return this.http.post<IUser>(`${this.resourceUrl()}/add`, user, {
      observe: 'response',
    });
  }

  login(req: any): Observable<EntityResponseType> {
    return this.http.post<IUser>(`${this.resourceUrl()}/login`, req, {
      observe: 'response',
    });
  }

  update(user: IUser): Observable<EntityResponseType> {
    return this.http.put<IUser>(`${this.resourceUrl()}/edit`, user, {
      observe: 'response',
    });
  }

  get(id: String): Observable<EntityResponseType> {
    return this.http.get<IUser>(`${this.resourceUrl()}/${id}`, {
      observe: 'response',
    });
  }
}
