import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})

export class VerifyOtpComponent implements OnInit {

  form: FormGroup;
  otpFieldNames: string[] = ['otp1', 'otp2', 'otp3', 'otp4'];
  userId!: string;
  email: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    const otpControls: { [key: string]: any } = {};

    this.otpFieldNames.forEach(fieldName => {
      otpControls[fieldName] = ['', [Validators.required]];
    });

    this.form = this.fb.group(otpControls);
  }

  ngOnInit(): void {
    localStorage.getItem(this.email);
  }

  submitForm() {
    if (this.form.valid) {
      const otp = this.otpFieldNames.map(fieldName => this.form.value[fieldName]).join('');

      this.userService.isOtpValid(otp)
        .subscribe(
          (response: any) => {
            console.log('Ready to update password updated successfully', response);
            this.router.navigate(['/password-update']);
          },
          (error: any) => {
            console.error('Error updating password:', error);
          }
        );
    }
  }

}
