import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { User } from '../../interface/users';
import { Router } from '@angular/router';

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
    private router: Router
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

  // submitForm() {
  //   if (this.form.valid) {
  //     // Call the createUser method and subscribe to the observable
  //     this.userService.createUser(this.form.value).subscribe(
  //       (data: any) => {
  //         console.log("Data what you have", data);
  //         console.log("Data Message?", data.message);
  //         console.log("Data ID?", data.id);
  //         console.log("Data ID?", data.id);
  //         console.log("Data Name?", data.fullName);
  //         console.log("Data Token?", data.accessToken);
  //         console.log("Data email?", data.email);
  //         // console.log(id, fullName, email, accessToken)

  //         // Set the Id in the local storage using the user's id from the response
  //         localStorage.setItem('Id', data.id); // Assuming the response contains the user's id
  //         // const accessToken = this.form.value.accessToken;
  //         // const loggedInUserEmail = this.form.value.email;
  //         // Display a success message using Swal
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Registered Successful!',
  //         }).then((result) => {
  //           if (result.value) {
  //             // Navigate to the login page upon success
  //             this.router.navigate(['/login']);
  //           }
  //         });
  //       },
  //       (error: any) => {
  //         // Display an error message using Swal if registration fails
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Registration Failed!',
  //           text: 'An error occurred during registration. Please try again later.',
  //         });
  //       }
  //     );
  //   }
  // }

  submitForm() {
    if (this.form.valid) {
      this.userService.createUser(this.form.value).subscribe(
        (data: User) => {

          console.log("This data", data)
          console.log("This email", data.email)
          console.log("This id", data.id)
          console.log("This fullname", data.fullName)

          const id = data.id;
          const email = data.email;
          const fullName = data.fullName

          localStorage.setItem('ID', id.toString());
          localStorage.setItem('Email', email.toString());
          localStorage.setItem('fullName', fullName.toString());

          Swal.fire({
            icon: 'success',
            title: 'Registered Successful!',
          }).then((result) => {
            if (result.value) {
              // Navigate to the login page upon success
              this.router.navigate(['/home']);
            }
          });
        },
        (error: any) => {
          // Display an error message using Swal if registration fails
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed!',
            text: 'An error occurred during registration. Please try again later.',
          });

        })
    }
  }


}




