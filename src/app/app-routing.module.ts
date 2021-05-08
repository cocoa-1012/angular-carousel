import { ESportsComponent } from './usecases/e-sports/e-sports.component';
import { EntertainmentComponent } from './usecases/entertainment/entertainment.component';
import { Home2Component } from './home2/home2.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { OrganizerPageComponent } from './organizer-page/organizer-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
// import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up-form/sign-up.component';
import { FirebaseCheckComponent } from './firebase-check/firebase-check.component';


const routes: Routes = [
  { //Home
    path: '',
    // redirectTo: '/',
    // pathMatch: 'full',
    component: Home2Component,

  },
  { // tour
    path: 'features',
    component: FeaturesPageComponent,
  },
  { // entertainment organizers
    path: 'entertainment',
    component: EntertainmentComponent,
  },
  { // e-sports organizers
    path: 'e-sports',
    component: ESportsComponent,
  },
  { // pricing
    path: 'pricing',
    component: PricingPageComponent,
  },
  { // Home
    path: 'about',
    component: AboutPageComponent,
  },
  { // signup
    path: 'signup',
    component: SignUpComponent,
  },
  { // blog
    path: 'blog',
    component: BlogComponent,
  },
  { // blog post
    path: 'blog/post',
    component: BlogPostComponent,
  },
  { // Firebase Check
    path: '.well-known/acme-challenge/gjioCsK2gbBBdhuT6xM_Nwyh6MQWCqoM7RGlX_Clz3s',
    component: FirebaseCheckComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
