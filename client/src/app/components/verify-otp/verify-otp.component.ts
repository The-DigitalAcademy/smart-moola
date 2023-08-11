import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  form: FormGroup;
  otpFieldNames: string[] = ['otp1', 'otp2', 'otp3', 'otp4', 'otp5', 'otp6'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {
    const otpControls: { [key: string]: any } = {}; // Define the type of otpControls

    this.otpFieldNames.forEach(fieldName => {
      otpControls[fieldName] = ['', [Validators.required]];
    });

    this.form = this.fb.group(otpControls);
  }

  ngOnInit(): void {
    // Get userId from query parameters using ActivatedRoute
    this.router.queryParams.subscribe((params: any) => {
      const userId = params['userId']; // Replace 'userId' with the actual parameter name
      // Now you have the userId available for use
      
    });
    
  }

  submitForm() {
    if (this.form.valid) {
      const otp = this.otpFieldNames.map(fieldName => this.form.value[fieldName]).join('');
      const newPassword = 'newlyEnteredPassword'; // Get the newly entered password somehow

      this.userService.updateUserWithOtp(userId, newPassword, otp)
        .subscribe(
          (response: any) => { // Provide accurate type information for response
            console.log('Password updated successfully', response);
            this.router.navigate(['/success']); // Navigate to success page or home page
          },
          (error: any) => { // Provide accurate type information for error
            console.error('Error updating password:', error);
          }
        );
    }
  }

}
