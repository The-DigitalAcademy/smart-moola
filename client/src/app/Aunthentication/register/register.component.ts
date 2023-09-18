import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/Loader';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;
  session: any;

  constructor(

    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private loaderService: LoaderService

  ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else if (confirmPassword) {
      confirmPassword.setErrors(null);
    }
  }

  submitForm() {
    if (this.form.valid) {
      const fullName = this.form.value.fullName;
      const email = this.form.value.email;

      console.log("Name", fullName)
      console.log("E-mail", email)
      console.log("submitForm() called");

      this.loaderService.startLoader();

      this.userService.createUser(this.form.value).subscribe(
        (data: any) => {
          // Assuming the registration was successful
          console.log("Data", data);

          if (data.message && typeof data.message === 'string') {
            const matchResult = data.message.match(/\d+/);
            if (matchResult && matchResult[0]) {
              const id = parseInt(matchResult[0]);
              console.log("Extracted ID:", id);

              const accessToken = data.accessToken;

              localStorage.setItem('ID', id.toString());
              localStorage.setItem('FullName', fullName);
              localStorage.setItem('Email', email);
              localStorage.setItem('Token', accessToken)

              // const accessToken = data.accessToken;

              console.log(accessToken, "Access Token");

              this.loaderService.stopLoader();

              Swal.fire({
                icon: 'success',
                title: 'Registered Successful!',
              }).then((result) => {
                if (result.value) {
                  console.log('Submitting form...');
                  this.router.navigate(['/home']);
                }
              });
            } else {
              console.error("Invalid data format:", data);
            }
          } else {
            console.error("Invalid data format:", data);
          }
        },
        (error: any) => {
          // Display an error message using Swal if registration fails
          this.loaderService.stopLoader();
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed!',
            text: 'An error occurred during registration. Please try again later.',
          });
        }
      );
    }
  }

}