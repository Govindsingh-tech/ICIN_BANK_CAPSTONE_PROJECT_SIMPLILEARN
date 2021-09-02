import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ChequebookResponse} from './_models/chequebookresponse'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly rootUrl = 'https://icinbankapp-env.eba-x3z9wunv.us-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  insertRequest(accNo: number,pages:number=20) {
    var body = {
      account: accNo,
      no_of_pages: pages, 
    }
    console.log(body);
    return this.http.post<ChequebookResponse>(this.rootUrl + '/cheque/request', body);
  }
}
