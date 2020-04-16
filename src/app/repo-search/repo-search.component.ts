import { Component, OnInit } from '@angular/core';
import { ProfileService }from '../profile-service/profile.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  repos:any;
  searchedRepo:string;

  constructor(private profileService:ProfileService){ }


  getByRepo(reponame) {
    this.profileService.getRepoList(reponame).then(
   (success) => {
    this.repos = this.profileService.newRepo.items;
      console.log(this.repos)
   },
   (error) => {
    console.log(error);
  }
    );
  }

  submitRepo(){
    this.getByRepo(this.searchedRepo);
  }
  ngOnInit(): void {

  }

}
