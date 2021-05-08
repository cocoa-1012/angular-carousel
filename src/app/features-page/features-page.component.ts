import { SeoService } from './../seo.service';
import { bgwsContentHeightTrigger400 } from './../animations/transition.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgws-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.scss'],
    animations: [
    bgwsContentHeightTrigger400,
  ],
})
export class FeaturesPageComponent implements OnInit {

  features = [
    {
      title: 'CRM',
      icon: 'hotel',
      copy: 'Feature text lalalala',
    },
    {
      title: 'CRM',
      icon: 'hotel',
      copy: 'Feature text lalalala',
    },
  ];

  // Financials
  talentBookings: boolean;
  talentTerms: boolean;
  talentShare: boolean;

  // Documents
  documentsPlan: boolean;
  documentsOverview: boolean;
  documentsLearn: boolean;

  constructor(
    private seo: SeoService,

  ) { }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Blueghost product features',
      description: 'Your event command deck - single source of truth event management software',
      image: '/src/assets/images/illustrations/financial-dashboard-no-background.svg'
    });

    this.talentBookings = true;
    this.talentTerms = false;
    this.talentShare = false;

    // Docs
    this.documentsOverview = false;
    this.documentsPlan = true;
    this.documentsLearn = false;

  }

  // Financials
  toggleTalentBookings() {
    this.talentTerms = false;
    this.talentBookings = true;
    this.talentShare = false;
  }

  toggleTalentTerms() {
    this.talentTerms = true;
    this.talentBookings = false;
    this.talentShare = false;
  }

  toggleTalentShare() {
    this.talentTerms = false;
    this.talentBookings = false;
    this.talentShare = true;
  }

  // Documents
  toggleDocumentsPlan() {
    this.documentsOverview = false;
    this.documentsPlan = true;
    this.documentsLearn = false;
  }

  toggleDocumentsOverview() {
    this.documentsOverview = true;
    this.documentsPlan = false;
    this.documentsLearn = false;
  }

  toggleDocumentsLearn() {
    this.documentsOverview = false;
    this.documentsPlan = false;
    this.documentsLearn = true;
  }

}
