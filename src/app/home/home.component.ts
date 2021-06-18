import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
//import the service to manage the api
import { RepoApiService } from './../repo-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //default page number
  page:number=1;
  // array to store the data
  reposList:any[]=[]
  // total length of pages
  totalLength:any = '';
// getting a copy of the service 
  constructor(private _RepoApiService:RepoApiService) { 
    // this._RepoApiService.getData(this.page).subscribe((response)=>{
    //   this.reposList  = response.items
    //   this.totalLength = response.length
    //   console.log(this.reposList);
    // })
  }

  ngOnInit(): void {
    this.repoPage(1)
  }
repoPage(e:number)
{
this.page = e
this._RepoApiService.getData(this.page).subscribe((response)=>{
  this.reposList  = response.items
  this.totalLength = response.length
  console.log(this.reposList);
})
}
}
