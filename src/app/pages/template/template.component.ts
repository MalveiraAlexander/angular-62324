import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  user: User = new User();

  save(form: NgForm) {
    console.log(form);
  }
}

class User {
  name: string;
  lastname: string;
  email: string;
  dni: string;
  max: number;
  now: number;
}
