import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        'password': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }
    )
  }
  onSubmit(){
    const email = this.form.get('email').value
    const password = this.form.get('password').value
    this.authService.onSignin(email, password).subscribe(
      (response: any)=>{
        alert('شما با موفقیت وارد شده اید.')
      }
    )
  }

}
