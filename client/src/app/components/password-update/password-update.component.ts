import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.passwordUpdateForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const otp = params['otp'];
      const newPassword = params['newPassword'];
  
      // Set the values in the form controls if needed
      this.passwordUpdateForm.patchValue({
        otp: otp,
        newPassword: newPassword
      });
    });
  }  

  submitForm() {
    if (this.passwordUpdateForm.valid) {
      const newPassword = this.passwordUpdateForm.value.newPassword;
      const enteredOtp = this.passwordUpdateForm.value.otp;
      const userId = this.userId; // Get the userId from wherever you're storing it
  
      this.userService.updateUserWithOtp(userId, newPassword, enteredOtp)
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
