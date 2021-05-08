import { HomeService } from './home.service';
import { SeoService } from './../seo.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import Typed from 'typed.js';

import { gsap } from 'gsap';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router} from '@angular/router';


@Component({
  selector: 'bgws-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  showCookie = true;

  // customer spotlight image
  customerSpotlightDefaultImage = '../assets/images/logos/bg_Logomark_Gradient.svg';
  customerSpotlightImage = '../../assets/images/madu.png';


  problems = [
    {
      number: '01',
      title: "Using separate apps.",
      solution: "With a single source of truth, everyone in the event can have access to what they need.",
      color: '#FF8B78'
    },
    {
      number: '02',
      title: "Know what everyone is working on.",
      solution: "Working together is much easier when everyone is in the loop and accountable for what they should be doing.",
      color: '#EAB124'
    },
    {
      number: '03',
      title: "Build and cultivate better relationships.",
      solution: "Understand the importance that each attendee, supplier, sponsor and staff person plays on your events.",
      color: '#FF8B78'
    },
    {
      number: '04',
      title: "Get a birds-eye view of everything.",
      solution: "Take action in real time and make adjustments as needed, so you can delight not only attendees, but everyone working in the event.",
      color: '#2c4bff'
    },
    {
      number: '05',
      title: "Collect and share information at scale.",
      solution: "Build itineraries and advancing lists together with google docs style collaboration.",
      color: '#0b1940'
    },
    // {
    //   number: '05',
    //   title: "Automate ",
    //   solution: "Link event contracts, riders and the hundreds of documents to wherever they belong. Gone are the days of looking for stuff on gmail.",
    //   color: '#0b1940'
    // },
  ];

  maxSteps = this.problems.length - 1;
  actualStep = 1;
  borderLeftStep = -1;
  leftStep = -1;
  borderRightStep = -1;
  rightStep = -1;
  timer = 25000;
  timeout = undefined;

  // Features
  features: string;

  // problem / solution Carousel
  carouselActive: boolean;

  mobileView = false;

  constructor(
    private home: HomeService,
    private seo: SeoService,
    private _observer: BreakpointObserver,
    private router: Router,
  ) {
    this.mobileView = this._observer.isMatched('(max-width: 959px)');
    const data = localStorage.getItem('BG_WS_SHOW_COOKIE');
    this.showCookie = !(data === undefined || !data);
    this.home.onShowCookie().subscribe((value) => {
      this.showCookie = value;
    });
   }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Blueghost home page',
      description: 'The all in one workspace for streamlining live events. Event management software for festivals, conferences, e-sports and meetings.',
      image: '/src/assets/images/logos/bg_Logomark_Gradient.svg'
    });
    // this.features
    this.features = 'talentBookings';

    // Typed
    const typed = new Typed('#typed', {
      strings: [
        'for Festivals',
        'for E-Sports Events',
        'for Conferences',
        'for Online Events',
        // 'for Artists',
        // 'for Speakers',
      ],
      typeSpeed: 35,
      backSpeed: 35,
      fadeOut: false,
      loop: true,
    });

    this.initCarousel();
  }



  private initCarousel() {
      this.actualStep++;
      if (this.actualStep > this.maxSteps || this.actualStep === 0) {
        this.actualStep = 0;
        this.leftStep = this.maxSteps - 1;
        this.borderLeftStep = this.maxSteps;
        this.rightStep = this.actualStep + 2;
        this.borderRightStep = this.actualStep + 1;
      } else if (this.actualStep === this.maxSteps) {
        this.borderLeftStep = this.actualStep - 2;
        this.leftStep = this.actualStep - 1;
        this.rightStep = 0;
        this.borderRightStep = 1;
      } else {
        this.borderLeftStep = this.actualStep - 2;
        this.leftStep = this.actualStep - 1;
        this.rightStep = this.actualStep + 1;
        this.borderRightStep = this.actualStep + 2;
      }
      console.log("initCarousel UUUU",this.borderLeftStep, this.leftStep, this.actualStep, this.rightStep, this.borderRightStep);
      this.timeout = setTimeout(() => {
          this.initCarousel();
      }, this.timer);
  }


  prev(): void {
    clearTimeout(this.timeout);
    this.actualStep = this.actualStep - 2;
    if (this.actualStep < 0) {
      this.actualStep = this.maxSteps + this.actualStep + 1;
    }
    this.initCarousel();
  }

// Forward - next
  next(): void {
    clearTimeout(this.timeout);
    this.initCarousel();
  }


  // problem / solution carousel
  carouselToggle(item) {
    this.carouselActive = !this.carouselActive;
    console.log(item);
  }

  westClick() {
    switch (this.features) {
      case 'talentBookings':
        this.features = 'database';
        break;
      case 'financials':
        this.features = 'talentBookings';
        break;
      case 'tasks':
        this.features = 'financials';
        break;
      case 'database':
        this.features = 'tasks';
        break;
    }
  }

  eastClick() {
    switch (this.features) {
      case 'talentBookings':
        this.features = 'financials';
        break;
      case 'financials':
        this.features = 'tasks';
        break;
      case 'tasks':
        this.features = 'database';
        break;
      case 'database':
        this.features = 'talentBookings';
        break;
    }
  }

  signup(value) {
    localStorage.setItem('BG_WS_SIGNUP_EMAIL', value);
    this.router.navigate(['signup']).then(() => {
      console.log(value);
    });
    // [routerLink]="'/signup'"
  }
}
