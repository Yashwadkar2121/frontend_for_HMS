import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root',
})
export class AppoinmentService {
  private baseUrl = 'http://localhost:8081/api/v2';

  constructor(private httpClient: HttpClient) {}

  // Get all appointments
  getAppoinmentList(): Observable<Appoinment[]> {
    return this.httpClient.get<Appoinment[]>(this.baseUrl);
  }

  // Create a new appointment
  createAppointment(appointment: Appoinment): Observable<Appoinment> {
    return this.httpClient.post<Appoinment>(
      `${this.baseUrl}/insert`,
      appointment
    );
  }
}
