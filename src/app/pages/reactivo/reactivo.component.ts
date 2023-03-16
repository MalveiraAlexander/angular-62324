import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.scss']
})
export class ReactivoComponent implements OnInit {

  formAdd: FormGroup;
  forms: FormArray;
  max: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    console.log(this.formAdd);
    console.log(this.formAdd.value);
  }

  createForm() {
    this.forms = new FormArray([
      new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
      })
    ]);
    this.formAdd = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dni: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,2}\.?\d{3}\.?\d{3}$/)]),
      max: new FormControl<number>(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      now: new FormControl<number>(0, (control: AbstractControl) => Validators.max(this.max)(control)),
    });
  }
}
