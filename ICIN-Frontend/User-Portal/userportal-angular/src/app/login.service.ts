import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootUrl = 'https://icinbankapp-env.eba-x3z9wunv.us-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    var body = {
      username: userName,
      password: password
    }
    return this.http.post(this.rootUrl + '/login', body);
  }
}
