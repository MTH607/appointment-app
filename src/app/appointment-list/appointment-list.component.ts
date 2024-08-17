import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointment: Appointment[] = [];
  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointment.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      alert(this.appointment.length);
    }
  }
}
