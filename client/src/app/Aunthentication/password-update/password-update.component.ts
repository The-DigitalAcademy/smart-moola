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
  email: string = '';

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

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else if (confirmPassword) {
      confirmPassword.setErrors(null);
    }
  }

  ngOnInit(): void {
    // Retrieve the email from local storage
    this.email = localStorage.getItem('Email') || '';
    console.log(this.email, "email");
  }

  submitForm() {
    console.log("Working")
    if (this.passwordUpdateForm.valid) {
      const password = this.passwordUpdateForm.value.password;
      const confirmPassword = this.passwordUpdateForm.value.confirmPassword;

      const passwordUpdate = {
        email: this.email,
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

}
