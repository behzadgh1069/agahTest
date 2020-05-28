import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        'fullName': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }
    )
  }
  onSubmit(){
    let email = this.form.get('email').value
    let password = this.form.get('password').value
    let fullName = this.form.get('fullName').value
    this.authService.onSignup(email, password, fullName).subscribe(
      (response: any)=>{
       alert('عضویت شما با موفقیت انجام شد.')
      }
    )
  }
}
