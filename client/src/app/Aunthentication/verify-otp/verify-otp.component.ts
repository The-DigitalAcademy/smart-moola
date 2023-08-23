// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UsersService } from 'src/app/services/users.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-verify-otp',
//   templateUrl: './verify-otp.component.html',
//   styleUrls: ['./verify-otp.component.scss']
// })
// export class VerifyOtpComponent implements OnInit {

//   form: FormGroup;
//   otpFieldNames: string[] = ['otp1', 'otp2', 'otp3', 'otp4'];
//   userId!: string;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     private userService: UsersService
//   ) {
//     const otpControls: { [key: string]: any } = {}; // Define the type of otpControls

//     this.otpFieldNames.forEach(fieldName => {
//       otpControls[fieldName] = ['', [Validators.required]];
//     });

//     this.form = this.fb.group(otpControls);
//   }

//   ngOnInit(): void {

//   }

//   submitForm() {
//     if (this.form.valid) {
//       const otp = this.otpFieldNames.map(fieldName => this.form.value[fieldName]).join('');

//       this.userService.isOtpValid(otp)
//         .subscribe(
//           (response: any) => {
//             console.log('Ready to update password updated successfully', response);
//             this.router.navigate(['/password-update'], { queryParams: { email: email } }); 
//           },
//           (error: any) => {
//             console.error('Error updating password:', error);
//           }
//         );
//     }
//   }

// }

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
    const otpControls: { [key: string]: any } = {}; // Define the type of otpControls

    this.otpFieldNames.forEach(fieldName => {
      otpControls[fieldName] = ['', [Validators.required]];
    });

    this.form = this.fb.group(otpControls);
  }

  ngOnInit(): void {
    localStorage.getItem(this.email);
    // Retrieve the email from the query parameter
    this.email = this.route.snapshot.queryParams['email'];
  }
  

  submitForm() {
    if (this.form.valid) {
      const otp = this.otpFieldNames.map(fieldName => this.form.value[fieldName]).join('');
  
      this.userService.isOtpValid(otp)
        .subscribe(
          (response: any) => {
            console.log('Ready to update password updated successfully', response);
  
            // Navigate to the password update component with queryParams
            this.router.navigate(['/password-update'], { queryParams: { email: this.userId } });
          },
          (error: any) => {
            console.error('Error updating password:', error);
          }
        );
    }
  }
  
  
  
}
