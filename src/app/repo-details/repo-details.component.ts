import { RepoInfoService } from './../repo-info.service';
import { Component, OnInit } from '@angular/core';
// use the Activated Route to get the name from the url
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  // to store the single repo details
  repoInfo:any ={}
  ownerName:string =""
  repoName:string =""
  constructor(private _RepoInfoService:RepoInfoService, private _ActivatedRoute:ActivatedRoute) {
    //getting the owner & repo name from the url
    this.ownerName = _ActivatedRoute.snapshot.params.owner_name;
    this.repoName = _ActivatedRoute.snapshot.params.repo_name;
    // to run the method viewInfo
    _RepoInfoService.viewInfo(this.ownerName,this.repoName ).subscribe((response)=>{
    this.repoInfo = response;
    })

   }

  ngOnInit(): void {
  }

}
