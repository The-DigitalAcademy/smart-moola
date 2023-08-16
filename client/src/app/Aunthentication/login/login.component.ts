import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AuthGuardService } from '../../services/auth.guard';
import Swal from 'sweetalert2';
import { SessionsService } from 'src/app/services/sessions.service';

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
    private auth: AuthGuardService,
    private session : SessionsService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {

    if (this.form.valid) {
      this.usersService.userLogin(this.form.value).subscribe(data=>{
         console.log("userData", data);

  
        const accessToken = data.accessToken;
        const loggedInUserEmail = data.email;
        const id = data.id;
        
  this.session.saveLoggedUser(data)
  
        localStorage.setItem('Token', accessToken);
        localStorage.setItem('Email', loggedInUserEmail);
        localStorage.setItem('id', id);
        localStorage.setItem('fullName',data.fullName)
  
      //  Check if accessToken is present and valid
        if (accessToken && accessToken !== 'undefined') {
        //  this.router.navigate(['/home']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: 'Invalid username or password',
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: 'An error occurred during login. Please try again later.',
        });
      }
   );
     // });

    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Login Successful!',
    //   }).then((result)=>{
    //     if (result.value){
    //       this.router.navigate(["/home"])
    //     }})

     };
  }

}

