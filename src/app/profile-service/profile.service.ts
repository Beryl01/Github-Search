import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   newUser: User;
   userRepo:Repository;
   newRepo:any;
   private token = environment.token;

    constructor(private http:HttpClient) {

  }

  searchUsername(username:string) {
    interface ApiResponse {
       login: string,
        name: string,
       avatar_url: string,
       location: string,
       html_url: string,
       followers: number,
       following: number,
      public_repos: number,
       created_at: Date,

    }

     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?access_token=${this.token}`)
      .toPromise().then(
        (results) => {
             this.newUser = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
     return promise
  }

  getUserRepos(username:string) {
      interface ApiResponse {
       name: string,
       description: string,
       html_url: string,
       language: string,
       forks:number,
       watchers:number
       updated_at: Date
      }

     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}/repos?access_token=${this.token}`)
      .toPromise().then(
        (results) => {
             this.userRepo = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
     return promise
  }

  getRepoList(reponame:string) {
      interface ApiResponse {
       name: string,
       description: string,
       html_url: string,
       language: string,
       forks:number,
       watchers:number
       updated_at: Date
      }

     let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/search/repositories?q=${reponame}
      &per_page=1000 access_token=${this.token}`).toPromise().then(
        (results) => {
             this.newRepo = results;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
     return promise
  }

}




