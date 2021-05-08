import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  showFormSubject = new Subject();
  showCookieSubject = new Subject();

  constructor() {
  }

  public emitShowForm(showFormSubject) {
    this.showFormSubject.next(showFormSubject);
  }

  public onShowForm(): Observable<any> {
    return this.showFormSubject.asObservable();
  }

  public emitShowCookie(showCookieSubject) {
    this.showCookieSubject.next(showCookieSubject);
  }

  public onShowCookie(): Observable<any> {
    return this.showCookieSubject.asObservable();
  }
}
