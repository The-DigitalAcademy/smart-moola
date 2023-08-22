// password-update.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

  passwordUpdateForm: FormGroup;
  email: string = ''; // Declare and initialize the email property

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {
    this.passwordUpdateForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void {
    // Retrieve the email from local storage
    this.email = localStorage.getItem('Email') || '';
    console.log(this.email, "email");
  }  
  
  submitForm() {
    if (this.passwordUpdateForm.valid) {
      const password = this.passwordUpdateForm.value.password;
      const confirmPassword = this.passwordUpdateForm.value.confirmPassword;

      const passwordUpdate = {
        email: this.email , // Use the stored email
        password,
        confirmPassword
      };

      this.userService.updatePassword(passwordUpdate)
        .subscribe(
          response => {
            console.log('Password updated successfully', response);
            this.router.navigate(['/login']);
          },
          error => {
            console.error('Error updating password:', error);
          }
        );
    }
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    // ... validator logic ...
  }
}
