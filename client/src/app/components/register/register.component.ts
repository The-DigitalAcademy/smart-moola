// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup} from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { UserService } from '../../services/users.service'; // Import the UserService

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   // userService: any;

//   // form: FormGroup;

//   constructor(
//     private fb: FormBuilder,

//     // private userService: UserService // Inject the UserService
//     ) {
//     // this.form = this.fb.group({
//     //   name: ['', Validators.required],
//     //   surname: ['', Validators.required],
//     //   email: ['', [Validators.required, Validators.email]],
//     //   phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//     //   password: ['', [Validators.required, Validators.minLength(8)]],
//     //   confirmPassword: ['', Validators.required]
//     // }, { validators: this.passwordMatchValidator });
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   submit(form : NgForm) {

//     this.userService.createUser(form.value)
//     console.log(form.value);
//     // you can send the form data to a server or perform any other action you need
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password');
//     const confirmPassword = form.get('confirmPassword');

//     if (password && confirmPassword && password.value !== confirmPassword.value) {
//       confirmPassword.setErrors({ mismatch: true });
//     } else {
//       confirmPassword?.setErrors(null);
//     }
//   }

// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../services/users.service';
// import Swal from 'sweetalert2';
import Swal, { SweetAlertResult } from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;
  router: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UsersService
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
      this.userService.createUser(this.form.value)
      // console.log(this.form.value);

      Swal.fire({
        icon: 'success',
        title: 'registered Successful!',
      }).then((result)=>{
        if (result.value){
          this.router.navigate(["/login"])
        }})

    }
  }

}




