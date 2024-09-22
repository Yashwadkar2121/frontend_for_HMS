import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root',
})
export class AppoinmentService {
  constructor(private httpCient: HttpClient) {}

  private baseUrl = 'http://localhost:8081/api/v2';

  getAppoinmentList(): Observable<Appoinment[]> {
    return this.httpCient.get<Appoinment[]>(`${this.baseUrl}`);
  }
}
