import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { RepoSearchComponent } from '../repo-search/repo-search.component'

const routes: Routes = [
{ path: 'home', component: MyProfileComponent},
{ path: 'repos', component: RepoSearchComponent},
{ path: '', redirectTo:"/home", pathMatch:"full"},
{ path:'**', component:NotFoundComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
