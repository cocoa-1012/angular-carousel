import { HomeService } from './../../home2/home.service';
import { bgwsContentHeightTrigger } from './../../animations/transition.animations';
import { CoreComponent } from './../../core/core.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import {TopnavService} from './topnav.service';

@Component({
  selector: 'bgws-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [
    bgwsContentHeightTrigger,
  ],
})
export class TopnavComponent extends CoreComponent implements OnInit {
  menuOpened = true;
  mobileView = false;
  useCaseOpen = false;

  constructor(private home: HomeService, public dialog: MatDialog, private _observer: BreakpointObserver, public topnavService: TopnavService) {
    super(dialog);
    this.mobileView = this._observer.isMatched('(max-width: 959px)');
    this.topnavService.onMenuOpened().subscribe(value => {
      console.log(value);
      this.menuOpened = value;
    });
  }

  ngOnInit() {
    this.topnavService.emitMenuOpened(!this.mobileView);
  }

  checkValue(event: any) {
    this.topnavService.emitMenuOpened(event.srcElement.checked);
  }

  useCaseToggle(event: any) {
    this.useCaseOpen = !this.useCaseOpen;
    console.log(this.useCaseOpen);
  }

  toggleMobileMenu() {
    this.topnavService.emitMenuOpened(!this.menuOpened);
  }

  closeMobileMenu() {
    if (this.mobileView) {
      this.topnavService.emitMenuOpened(false);
    }
  }

}
