import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  fb!:FormGroup;
  users!:Users;
  regInvalid = false;

        constructor(
          private usersService: UsersService,
          private router: Router,
          ) { }

          ngOnInit(){
            this.regInvalid = false;

            this.fb = new FormGroup({
      
              fullname: new FormControl(null,[Validators.required,Validators.min(6)]),
              email:new FormControl(null,[Validators.required,Validators.email]),
              password:new FormControl(null,[Validators.required,Validators.min(8),this.passwordValidator]),
              confirmpassword:new FormControl(null,[Validators.required,Validators.min(8),this.passwordValidator]),
            });
          }

    passwordValidator(control:FormControl):{[key:string]:boolean}|null{
            const value : string = control.value;
            const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
            const hasNumber = /\d/.test(value);
            const hasLetter = /[a-zA-Z]/.test(value);
      
            if (!hasSymbol||!hasNumber||!hasLetter){
              return {invalidPassword:true};
            }
              return null;
    }

    
          onSubmit() {
            
          }
          
          register(){
              if (this.fb.valid) {
                this.usersService.createUser(this.fb.value).subscribe(res=>{
                    this.users = res
                    console.log(res);
                    
                });
                Swal.fire({
                  icon: 'success',
                  title: 'Registration Successful!',
                  text: 'You can now login',
                  confirmButtonColor: '#38A3A5',
                }).then((result)=>{
                  if (result.value){
                    this.router.navigate(["/login"])
                  }})

                  this.router.navigate(['/login']); 
                      console.log("Register successful");       
              } else {
                this.regInvalid = true;
                console.log("form invalid"); 
              }
          }
      
         
}

