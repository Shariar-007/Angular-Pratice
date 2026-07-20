
import {Component} from '@angular/core';
import {GithubSearchService} from "../services/github-search.service";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap, catchError} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: false
})

export class HomePageComponent{
onInput(arg0: any) {
throw new Error('Method not implemented.');
}
  visible = true;
  private searchTerms = new Subject<string>();   // manually-fed stream of typed text
  results: any[] = [];
  loading = false;

  constructor(private GithubSearchService: GithubSearchService) {
    this.searchTerms.pipe(
      debounceTime(300),            // wait 300ms of silence before continuing
      distinctUntilChanged(),       // skip if the text is the same as last time
      switchMap(term => {
        if (!term.trim()) {
          return of([]);            // empty input → empty result, no API call
        }
        this.loading = true;
        return this.GithubSearchService.searchUsers(term).pipe(
          catchError(() => of([]))  // on error, emit an empty array instead of breaking the stream
        );
      })
    ).subscribe(users => {
      this.results = users;
      this.loading = false;
    });
  }


}
