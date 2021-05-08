import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'bgws-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(cmp: any, options?) {
    const isCellLayout = window.innerWidth <= 425;
    this.dialog.open(
      cmp,
      options
        ? options
        : isCellLayout
        ? {
            height: '100%',
            width: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
          }
        : {
            height: '90%',
            width: '26em',
            position: { bottom: '0px' },
          }
    );
  }

}
