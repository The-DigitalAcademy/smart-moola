import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  fullName: any = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private usersService: UsersService,) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Get the user's email from the form
      const email = this.form.value.email;

      localStorage.setItem('Email', email);

      // Call the sendEmail method from the UsersService to trigger the email sending
      this.usersService.sendEmail(email);

      // Redirect the user to the OTP verification page 
      this.router.navigate(['/project']);
    }
  }

  getLoggedInUserName() {
    this.fullName = localStorage.getItem('FullName'); // Assign the value to fullName
    console.log(this.fullName);
  }

  ngOnInit() {
    this.getLoggedInUserName();
    console.log(this.getLoggedInUserName())
  }

  logout() {
    this.usersService.userLogout();
  }

}
