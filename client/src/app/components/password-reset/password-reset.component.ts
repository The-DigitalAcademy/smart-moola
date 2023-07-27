import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form in the constructor or ngOnInit
    this.form = this.formBuilder.group({
      // Form controls and validators
    });
  }

  submitForm() {
    // Implement the submitForm function here
  }
  ngOnInit(): void {
  }

}
