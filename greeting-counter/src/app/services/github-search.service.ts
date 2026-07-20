import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

interface GithubUser {
  login: string;
  avatar_url: string;
}

interface GithubSearchResponse {
  items: GithubUser[];
}

@Injectable({providedIn: 'root'})
export class GithubSearchService{

  constructor(private httpClient: HttpClient){}

  searchUsers(query: string): Observable<GithubUser[]> {
    const url = `https://api.github.com/search/users?q=${query}`;
    return this.httpClient.get<GithubSearchResponse>(url).pipe(
      map(response => response.items)
    );
  }
}
