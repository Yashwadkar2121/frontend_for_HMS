import { Component } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';
import { Appoinment } from '../appoinment';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css',
})
export class AppoinmentComponent {
  appointments: Appoinment[] = [];
  constructor(private appoinmentService: AppoinmentService) {}

  ngOnInit(): void {
    this.getApponiments();
  }
  getApponiments() {
    this.appoinmentService.getAppoinmentList().subscribe((data) => {
      this.appointments = data;
    });
  }
}
