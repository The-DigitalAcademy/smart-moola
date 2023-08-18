import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Get the user's email from the form
      const email = this.form.value.email;

      // Call the sendEmail method from the UsersService to trigger the email sending
      this.usersService.sendEmail(email);

      // Redirect the user to the OTP verification page (optional)
      this.router.navigate(['/verify-otp']);
    }
  }

  ngOnInit(): void {
  }

}
