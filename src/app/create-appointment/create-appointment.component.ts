import { Component } from '@angular/core';
import { Appoinment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css',
})
export class CreateAppointmentComponent {
  appointment: Appoinment = new Appoinment();
  constructor(
    private apponintmentService: AppoinmentService,
    private router: Router
  ) {}

  saveAppoinment() {
    this.apponintmentService
      .createAppointment(this.appointment)
      .subscribe((data) => {
        console.log(data);
        this.gotoAppointment();
      });
  }
  onSubmit() {
    this.saveAppoinment();
  }

  gotoAppointment() {
    this.router.navigate(['/appointment']);
  }
}
