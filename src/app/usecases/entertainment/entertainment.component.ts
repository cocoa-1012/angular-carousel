import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgws-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {


  // Financials
  talentPlan: boolean;
  talentOverview: boolean;
  talentAnalyise: boolean;

  constructor() { }

  ngOnInit() {
    this.talentPlan = true;
    this.talentOverview = false;
    this.talentAnalyise = false;


  }

  // talent
  toggleTalentPlan() {
    this.talentOverview = false;
    this.talentPlan = true;
    this.talentAnalyise = false;
  }

  toggleTalentOverview() {
    this.talentOverview = true;
    this.talentPlan = false;
    this.talentAnalyise = false;
  }

  toggleTalentAnalyise() {
    this.talentOverview = false;
    this.talentPlan = false;
    this.talentAnalyise = true;
  }

}
