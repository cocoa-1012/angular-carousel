import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgws-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts = [
    {
      description: 'EVENT PRODUCTION - 9 min read',
      title: 'How to make artists love you 1',
      preview: 'For many engineers making a move into people management can feel like a fork in the road – but at Intercom it isnt an irreversible choice in your career path. Heres why we think management can actually make you a stronger engineer',
      author: 'Oliver Gattermayr',
      authorTitle: 'Chief Executive Officer at Blueghost',
    },
    {
      description: 'Artist care',
      title: 'How to make artists love you 2',
      preview: 'For many engineers making a move into people management can feel like a fork in the road – but at Intercom it isnt an irreversible choice in your career path. Heres why we think management can actually make you a stronger engineer',
      author: 'Oliver Gattermayr',
      authorTitle: 'Chief Executive Officer at Blueghost',
    },
    {
      description: 'Artist care',
      title: 'How to make artists love you 3',
      preview: 'For many engineers making a move into people management can feel like a fork in the road – but at Intercom it isnt an irreversible choice in your career path. Heres why we think management can actually make you a stronger engineer',
      author: 'Oliver Gattermayr',
      authorTitle: 'Chief Executive Officer at Blueghost',
    },
    {
      description: 'Artist care',
      title: 'How to make artists love you 4',
      preview: 'For many engineers making a move into people management can feel like a fork in the road – but at Intercom it isnt an irreversible choice in your career path. Heres why we think management can actually make you a stronger engineer',
      author: 'Oliver Gattermayr',
      authorTitle: 'Chief Executive Officer at Blueghost',
    },
    {
      description: 'Artist care',
      title: 'How to make artists love you 5',
      preview: 'For many engineers making a move into people management can feel like a fork in the road – but at Intercom it isnt an irreversible choice in your career path. Heres why we think management can actually make you a stronger engineer',
      author: 'Oliver Gattermayr',
      authorTitle: 'Chief Executive Officer at Blueghost',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
