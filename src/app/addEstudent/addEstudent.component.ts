import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-addEstudent',
  templateUrl: './addEstudent.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  styleUrls: ['./addEstudent.component.css']
})
export class AddEstudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
