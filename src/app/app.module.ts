import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { TimeSincePipe } from './time-since.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import {RoutingModule} from './routing/routing.module';
import { RepoSearchComponent } from './repo-search/repo-search.component'

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    NavbarComponent,
    HighlightDirective,
    TimeSincePipe,
    NotFoundComponent,
    RepoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
