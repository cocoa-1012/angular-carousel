import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'bgws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// export class AppComponent {
//   title = 'bg-website';
// }
export class AppComponent {
    title = 'Blueghost | Manage live events the smart way';
  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
