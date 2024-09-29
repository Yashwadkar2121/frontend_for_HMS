import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { AppComponent } from './app.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashComponent,
  },
  {
    path: 'appointment',
    component: AppoinmentComponent,
  },
  {
    path: 'create-appointment',
    component: CreateAppointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
