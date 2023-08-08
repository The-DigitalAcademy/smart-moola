import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/users';
import { SessionsService } from 'src/app/services/sessions.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  form: FormGroup;
  router: any;
  fullname = ""
  emaill="my E"
  password=""
  confirmPassword = ""
  loggedUser : any 

  private userId!: number;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UsersService,
    private sessions : SessionsService
  ) {
    this.form = this.fb.group(
      {
        fullName: [this.loggedUser.fullName, [Validators.required, Validators.minLength(3)]],
        email: [this.emaill, [Validators.required, Validators.email]],
        password: [this.password, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [this.confirmPassword, Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }
  ngOnInit(): void {
    this.loggedUser = this.sessions.getLoggedUser()
    console.log("name who logged");

    // this.emaill="meee"
    // = window.localStorage.getItem("fullName")
   // throw new Error('Method not implemented.');
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ mismatch: true });
    } else if (confirmPassword) {
      confirmPassword.setErrors(null);
    }
  }
  
  submitForm(): void {
    if (this.form.valid) {
      const updatedUser: User = this.form.value; // Get the form values as a User object.
  
      this.userService.updateUser(updatedUser).subscribe(
        (data: User) => {
          console.log('Update successful!', data);
  
          Swal.fire({
            icon: 'success',
            title: 'Updated Successful!',
          }).then((result) => {
            if (result.value) {
              this.router.navigate(['/home']);
            }
          });
        },
        (error) => {
          console.error('Update failed!', error);
          // Optionally, you can display an error message to the user.
        }
      );
    }
  }
  
}
