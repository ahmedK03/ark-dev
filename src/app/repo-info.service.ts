// to deal with github Api
import {HttpClient } from '@angular/common/http';
//using Rxjs
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RepoInfoService {

  constructor(private _HttpClient:HttpClient) {}
   
  // O_name refers to the owner name & R_name refers to the Repo name
   viewInfo(O_name:string,R_name:string):Observable <any>
   {
   return this._HttpClient.get(`https://api.github.com/repos/${O_name}/${R_name}`)
   }
}
