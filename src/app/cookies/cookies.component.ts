import { HomeService } from './../home2/home.service';
import { CookiePolicyComponent } from './../cookie-policy/cookie-policy.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'bgws-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  constructor(public dialog: MatDialog, private home: HomeService) { }

  ngOnInit() {
  }

  cookiePolicy() {
    const dialogRef = this.dialog.open(CookiePolicyComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeCookie() {
    localStorage.setItem('BG_WS_SHOW_COOKIE', 'false');
    this.dialog.closeAll();
    this.home.emitShowCookie(true);
  }
}
