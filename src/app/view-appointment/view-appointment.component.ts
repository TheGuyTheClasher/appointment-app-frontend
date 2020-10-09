import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { Appointment } from '../appoinment.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  appointments: Appointment[];
  // displayedColumns: ['date', 'name', 'contact']

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.appointmentService.getAppointments().subscribe((data: Appointment[]) => {
      this.appointments = data;


    })
  };

  deleteAppointment(id) {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.fetchAppointments();
    })
  };

}

