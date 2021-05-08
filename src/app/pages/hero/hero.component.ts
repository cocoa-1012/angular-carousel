import { Component, Input, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'bgws-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() header = 'The All-In-One Workspace for Live Events';
  @Input() subheader = ' Blueghost helps you streamline your live event operations, so you save time, money and keep your sanity.';
  @Input() media = '../../assets/images/home/bg-empty-event@2x.png';
  @Input() headerColor = 't-white';
  @Input() subheaderColor = 't-white-med';
  @Input() showTyped: boolean;
  @Input() emailForm: boolean;
  @Input() testimonials: boolean;
  // @Input() typedText = "";


  constructor() { }

  ngOnInit() {
    this.showTyped = false;
    this.emailForm = true;
    this.testimonials = false;

    // if (this.showTyped) {
    // }
    // this.typed();

  }

  typed() {
    const typed = new Typed('#typed', {
      strings: [
        'for Festivals',
        'for Nightclubs',
        'for Conferences',
        'for Agents',
        'for Artists',
        'for Speakers',
      ],
      typeSpeed: 35,
      backSpeed: 30,
      fadeOut: false,
      loop: true,
    });
  }

}
