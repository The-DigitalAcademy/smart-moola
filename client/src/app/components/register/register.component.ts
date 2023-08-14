import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;
  router: any;
  session: any;

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

      const accessToken = this.form.value.accessToken;
        const loggedInUserEmail = this.form.value.email;
        const id = this.form.value.id;
        
  
        localStorage.setItem('Token', accessToken);
        localStorage.setItem('Email', loggedInUserEmail);
        localStorage.setItem('id', id);
        localStorage.setItem('fullName',this.form.value.fullName)

      // console.log(this.form.value);
      console.log(this.form.value);
      Swal.fire({
        icon: 'success',
        title: 'registered Successful!',
      }).then((result)=>{
        if (result.value){
          // this.router.navigate(["/login"])
          this.router.navigate(["home"])
        }
      })

    }
  }

}




