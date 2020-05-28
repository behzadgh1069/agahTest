import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/do';


@Injectable()
export class AuthService{

  constructor(private httpClient: HttpClient){}

  onSignup(email: string, password: any, fullName: string){
    const body = {email: email, password: password, fullName: fullName}
    return this.httpClient.post('http://www.yoursite.com/register', body)
  }
  onSignin(email: string, password: any){
    const body = {email: email, password: password}
    return this.httpClient.post('http://www.yoursite.com/signin', body).do(
      (response)=>{
        localStorage.setItem('token', response['token']);
        localStorage.setItem('expire_in', response['expire_in']);
      }
    )
  }
  isAuthenticate(){
    return localStorage.getItem('token')
  }
  authenticateServer(){
    const body = {token: this.isAuthenticate}
    this.httpClient.post('http://www.yoursite.com/auth', body)
  }
}