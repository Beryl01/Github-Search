export class User {
  constructor(
          public login: string,
          public name: string,
          public avatar_url: string,
          public location: string,
          public html_url: string,
          public followers: number,
          public following: number,
          public public_repos: number,
          public created_at: Date,
  ){}
}
