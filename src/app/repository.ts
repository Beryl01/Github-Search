export class Repository {
  constructor(
            public name: string,
            public description: string,
            public html_url: string,
            public language: string,
            public forks:number,
            public watchers:number,
            public updated_at: Date) {}

}
