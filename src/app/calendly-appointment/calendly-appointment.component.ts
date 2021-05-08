import { Component, OnInit,     VERSION, 
    ElementRef,
    ViewChild } from '@angular/core';

  // import Calendly from

@Component({
  selector: 'bgws-calendly-appointment',
  templateUrl: './calendly-appointment.component.html',
  styleUrls: ['./calendly-appointment.component.scss']
})



export class CalendlyAppointmentComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  // calendly: any;
  savvycal: any;

  constructor() {
    // this.savvycal.
      //   this.Calendly.initInlineWidget({
      //   url: 'https://calendly.com/blueghost/chat',
      //   parentElement: this.container.nativeElement
      // });
   }

  ngOnInit(): void {
  }

}
