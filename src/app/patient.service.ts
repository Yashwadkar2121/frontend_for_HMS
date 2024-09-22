import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpCient: HttpClient) {}

  private baseUrl = 'http://localhost:8081/api/v1';

  getPatientList(): Observable<Patient[]> {
    return this.httpCient.get<Patient[]>(`${this.baseUrl}`);
  }
}
