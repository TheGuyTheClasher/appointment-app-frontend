import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LogInComponent } from './log-in/log-in.component';
import { AppointmentService } from './appointment.service';

import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';

import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'book', component: BookAppointmentComponent },
  { path: 'view', component: ViewAppointmentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,

    BookAppointmentComponent,
    ViewAppointmentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
