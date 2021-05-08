import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopnavService {
  private menuOpenedChanged = new Subject();

  public emitMenuOpened(value: boolean) {
    this.menuOpenedChanged.next(value);
  }

  public onMenuOpened(): Observable<any> {
    return this.menuOpenedChanged.asObservable();
  }
}
