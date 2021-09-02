import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

    readonly rootUrl = 'https://icinbankapp-env.eba-x3z9wunv.us-east-1.elasticbeanstalk.com';
  
    constructor(private http: HttpClient) { }
  
    insertEntry(username:string, saccount:string,ifscNo:string,raccount:string,amount:number) {
      var body = {
        username:username,
        saccount: saccount,
        ifsc: ifscNo, 
        raccount:raccount,
        amount:amount
      }
      console.log(body);
      return this.http.post(this.rootUrl + '/account/transfer', body);
    }
  }
  