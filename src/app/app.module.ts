import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroheaderComponent } from './heroheader/heroheader.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
//to fix the error NullInjectorError: No provider for HttpClient!
import { HttpClientModule } from '@angular/common/http';
// pagination import
import {NgxPaginationModule} from 'ngx-pagination';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroheaderComponent,
    HomeComponent,
    NavbarComponent,
    RepoDetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
