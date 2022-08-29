import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHealthRate } from 'src/app/components/modal/my-modal/health-rate.model';

type EntityResponseType = HttpResponse<IHealthRate>;
type EntityArrayResponseType = HttpResponse<IHealthRate[]>;

@Injectable({
  providedIn: 'root'
})
export class HealthRateService {
  resourceUrl() {
    return 'http://localhost:3000/healthRate';
  }

  constructor(protected http: HttpClient) { }
}
