import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userService: any;

  // form: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    //   surname: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    //   confirmPassword: ['', Validators.required]
    // }, { validators: this.passwordMatchValidator });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit(form : NgForm) {

    this.userService.createUser(form.value)
    console.log(form.value);
    // you can send the form data to a server or perform any other action you need
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
  
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }
  
}
