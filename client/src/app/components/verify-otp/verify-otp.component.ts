import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  form: FormGroup;
  otpFieldNames: string[] = ['otp1', 'otp2', 'otp3', 'otp4'];
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.route.queryParams.subscribe((params: any) => {
      const userId = params['userId']; // Replace 'userId' with the actual parameter name
      // Now you have the userId available for use
      
    });
    
  }

  submitForm() {
    if (this.form.valid) {
      const otp = this.otpFieldNames.map(fieldName => this.form.value[fieldName]).join('');
      const newPassword = 'newlyEnteredPassword'; // Get the newly entered password somehow
  
      this.userService.updateUserWithOtp(this.userId, newPassword, otp)
        .subscribe(
          (response: any) => {
            console.log('Password updated successfully', response);
            this.router.navigate(['/password-update']); // Navigate to success page or home page
          },
          (error: any) => {
            console.error('Error updating password:', error);
          }
        );
    }
  }
  

}
