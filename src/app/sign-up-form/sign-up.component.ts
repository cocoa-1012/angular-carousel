import { HomeService } from './../home2/home.service';
import { Signup } from './sign-up.class';
import { Component, OnInit } from '@angular/core';
import {SignUpService} from './sign-up.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'bgws-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private signUpService: SignUpService,
    private home: HomeService,
  ) {
    this.firstName = new FormControl();
    this.lastName = new FormControl();
    this.email = new FormControl();

    this.roleEventProducer = new FormControl();
    this.roleArtist = new FormControl();
    this.roleAgent = new FormControl();
    this.roleOther = new FormControl();
    this.roleOtherDescription = new FormControl();

    this.eventTypeFestivals = new FormControl();
    this.eventTypeClubs = new FormControl();
    this.eventTypeParties = new FormControl();
    this.eventTypeConferences = new FormControl();
    this.eventTypeLiveMarketing = new FormControl();
    this.eventOther = new FormControl();
    this.eventOtherDescription = new FormControl();

    this.form = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      // Roles
      roleEventProducer: this.roleEventProducer,
      roleAgent: this.roleAgent,
      roleArtist: this.roleArtist,
      roleOther: this.roleOther,
      roleOtherDescription: this.roleOtherDescription,

      // event types
      eventTypeFestivals: this.eventTypeFestivals,
      eventTypeClubs: this.eventTypeClubs,
      eventTypeParties: this.eventTypeParties,
      eventTypeConferences: this.eventTypeConferences,
      eventTypeLiveMarketing: this.eventTypeLiveMarketing,
      eventOther: this.eventOther,
      eventOtherDescription: this.eventOtherDescription,

    });

  }
  showForm = true;
  success = false;

  form: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;

  roleEventProducer: FormControl;
  roleAgent: FormControl;
  roleArtist: FormControl;
  roleOther: FormControl;
  roleOtherDescription: FormControl;

  eventTypeFestivals: FormControl;
  eventTypeClubs: FormControl;
  eventTypeParties: FormControl;
  eventTypeConferences: FormControl;
  eventTypeLiveMarketing: FormControl;
  eventOther: FormControl;
  eventOtherDescription: FormControl;

  showOther = false;
  showOtherEvent = false;
  showEventTypes = false;

  eventTypeEsports: any;

  ngOnInit() {
    this.email.setValue(localStorage.getItem('BG_WS_SIGNUP_EMAIL'));
  }

  onSubmit() {
    const signup = new Signup();
    signup.name = this.firstName.value;
    if (signup.name && this.lastName.value) {
      signup.name += ' ' + this.lastName.value;
    }
    signup.email = this.email.value;
    signup.roles = [];
    if (this.roleEventProducer.value) {
      signup.roles.push('event-producer');
    }
    if (this.roleArtist.value) {
      signup.roles.push('artist');
    }
    if (this.roleAgent.value) {
      signup.roles.push('agent');
    }
    if (this.roleOther.value) {
      signup.roles.push('other');
    }
    if (this.roleOtherDescription.value) {
      signup.roles.push(this.roleOtherDescription.value);
    }
    signup.eventType = [];
    if (this.eventTypeFestivals.value) {
      signup.eventType.push('festivals');
    }
    if (this.eventTypeClubs.value) {
      signup.eventType.push('clubs');
    }
    if (this.eventTypeParties.value) {
      signup.eventType.push('parties');
    }
    if (this.eventTypeConferences.value) {
      signup.eventType.push('conferences');
    }
    if (this.eventTypeLiveMarketing.value) {
      signup.eventType.push('live-marketing');
    }
    if (this.eventOther.value) {
      signup.eventType.push('other');
    }
    if (this.eventOtherDescription.value) {
      signup.eventType.push(this.eventOtherDescription.value);
    }
    this.signUpService.insert(signup).then(() => {});
    this.home.emitShowForm(false);
    this.success = true;
  }

  changeOther(event) {
    this.showOther = event.checked;
  }

  changeOtherEvent(event) {
    this.showOtherEvent = event.checked;
  }

  changeShowEventTypes(event) {
    this.showEventTypes = event.checked;
  }

  prepareTimer() {
    setTimeout(() => {
      this.success = true
    }, 2000);
  }
}
