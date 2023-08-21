import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

  passwordUpdateForm: FormGroup;
  userId: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) {
    this.passwordUpdateForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.passwordUpdateForm.valid) {
      const password = this.passwordUpdateForm.value.password;
      const confirmPassword = this.passwordUpdateForm.value.confirmPassword;
      const email = this.passwordUpdateForm.value.email;

      const passwordUpdate = {
        email,
        password,
        confirmPassword
      };

      this.userService.updatePassword(passwordUpdate)
        .subscribe(
          response => {
            console.log('Password updated successfully', response);
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