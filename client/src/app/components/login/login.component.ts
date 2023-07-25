import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AuthGuardService } from '../../services/auth.guard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private auth: AuthGuardService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {

    if (this.form.valid) {
      this.usersService.userLogin(this.form.value);

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
      }).then((result)=>{
        if (result.value){
          this.router.navigate(["/home"])
        }})

    };
  }

}

