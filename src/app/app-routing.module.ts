import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashComponent,
  },
  {
    path: 'appoinment',
    component: AppoinmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
