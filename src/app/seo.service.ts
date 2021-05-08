import { Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    config = {
      title: 'Blueghost | the smart way to manage live events',
      description: 'The all-in-one workspace for event organizers, artists and agents to collaborate on live events.',
      image: '/src/assets/images/social/bg-icon-400x400-x1.png',
      slug: 'blueghost.co',
      ...config
    };

    this.meta.updateTag({ name: 'twitter: card', content: 'summary'});
    this.meta.updateTag({ name: 'twitter: site', content: '@blueghost_co'});
    this.meta.updateTag({ name: 'twitter: title', content: 'config.title'});
    this.meta.updateTag({ name: 'twitter: description', content: 'config.description'});
    this.meta.updateTag({ name: 'twitter: image', content: 'config.image'});

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Blueghost' });
    this.meta.updateTag({ property: 'og:title', content: 'config.title' });
    this.meta.updateTag({ property: 'og:description', content: 'config.description' });
    this.meta.updateTag({ property: 'og:image', content: 'config.image' });
    this.meta.updateTag({ property: 'og:url', content: 'https://blughost.co' });
  }

}