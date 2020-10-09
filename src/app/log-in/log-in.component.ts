import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public sign_up_form: any;
  public log_in_form: any;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService, private router: Router) {
    this.sign_up_form = this.fb.group({
      first_last_name: ['', Validators.required],
      user_email: ['', [Validators.required]],
      user_password: ['', Validators.required]

    });
    this.log_in_form = this.fb.group({
      user_email: ['', [Validators.required]],
      user_password: ['', Validators.required]
    })

  }

  ngOnInit() {
  }

  on_signup_submit(signup_data) {
    console.log(signup_data);

  }

  on_login_submit(login_data) {
    console.log(login_data);

  }

}
