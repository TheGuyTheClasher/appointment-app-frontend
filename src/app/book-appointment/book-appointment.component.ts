import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  public book_appointment_form: any;

  constructor(private appointmentService: AppointmentService, private router: Router, private fb: FormBuilder) {

    this.book_appointment_form = this.fb.group({
      appointment_date: ['', Validators.required],
      contact_name: ['', Validators.required],
      contact_number: ['', [Validators.required, Validators.pattern(/^[-+]?[0-9]+$/)]]
    })
  }

  book_appointment(form_data) {
    console.log(form_data);

  }

  ngOnInit() {

  }

}
