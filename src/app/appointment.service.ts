import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  uri = 'http://localhost:3000'; 

  constructor(private http:HttpClient) {

   }

   getAppointments(){
     return this.http.get(`${this.uri}/appointments`);
   }

   getAppointmentById(id){
     return this.http.get(`${this.uri}/appointments/${id}`);
   }

   addAppointment(date, name, contact){
     const appointment = {
       date: date,
       name: name,
       contact: contact
     };
     return this.http.post(`${this.uri}/appointments/add`, appointment);
   }

   updateAppointment(id, date, name, contact){
     const appointment = {
       date: date,
       name: name,
       contact: contact
     };
     return this.http.post(`${this.uri}/appointments/update/${id}`, appointment);
   }

   deleteAppointment(id){
     return this.http.get(`${this.uri}/appointments/dalete/${id}`);
   }
}
