import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addEstudent',
  templateUrl: './addEstudent.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     FormsModule, 
     MatIconModule],
  styleUrls: ['./addEstudent.component.css']
})
export class AddEstudentComponent implements OnInit {

  name : string = ""
  age : string = ""
  document : string = ""
  licence : string = ""
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  onSubmit(){
    const formAdd = {
      name:  this.name,
      age: this.age,
      document: this.document,
      licence: this.licence
    }
    this.http.post('locahost:4000', formAdd)
      .subscribe(response => {
        console.log('Datos enviados al servidor:', response);
      }, error => {
        console.error('Error al enviar los datos:', error);
      });
  }
  }


