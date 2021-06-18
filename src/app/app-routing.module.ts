import { NotfoundComponent } from './notfound/notfound.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"repodetails/:owner_name/:repo_name",component:RepoDetailsComponent},
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
