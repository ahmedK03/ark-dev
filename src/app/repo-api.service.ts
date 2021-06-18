import { Injectable } from '@angular/core';
// to deal with github Api
import { HttpClient } from '@angular/common/http';
//using Rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoApiService {

  constructor(private _HttpClient:HttpClient) { }
  
  getData(page:number):Observable <any>
  {
return this._HttpClient.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
  }
}
