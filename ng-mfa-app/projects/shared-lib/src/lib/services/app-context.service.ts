import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppContextService {
  private userSubject = new BehaviorSubject<string>('Guest');
  user$ = this.userSubject.asObservable();

  setUser(user: string) {
    this.userSubject.next(user);
  }

  getUserSnapshot() {
    return this.userSubject.value;
  }
}
