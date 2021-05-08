import { SignUpComponent } from './sign-up-form/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { OrganizerPageComponent } from './organizer-page/organizer-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CookiesComponent } from './cookies/cookies.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {SignUpService} from './sign-up-form/sign-up.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HomeService} from './home2/home.service';
import { FirebaseCheckComponent } from './firebase-check/firebase-check.component';
import { CoreComponent } from './core/core.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { Home2Component } from './home2/home2.component';
import { EntertainmentComponent } from './usecases/entertainment/entertainment.component';
import { ESportsComponent } from './usecases/e-sports/e-sports.component';
import { InlineEmailComponent } from './commponents/inline-email/inline-email.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SignUpFooterComponent } from './components/sign-up-footer/sign-up-footer.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { CalendlyAppointmentComponent } from './calendly-appointment/calendly-appointment.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    ArtistPageComponent,
    OrganizerPageComponent,
    PricingPageComponent,
    AboutPageComponent,
    SiteFooterComponent,
    SignUpComponent,
    CookiesComponent,
    CookiePolicyComponent,
    FirebaseCheckComponent,
    CoreComponent,
    BlogComponent,
    BlogPostComponent,
    FeaturesPageComponent,
    Home2Component,
    EntertainmentComponent,
    ESportsComponent,
    InlineEmailComponent,
    HeroComponent,
    SignUpFooterComponent,
    TopnavComponent,
    CalendlyAppointmentComponent,
  ],
  imports: [
    // Firebase
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC5bH_FmK3ocH0mA9198vHLt0TH4fbpYDc',
      authDomain: 'b2in-web-site-prod.firebaseapp.com',
      databaseURL: 'https://b2in-web-site-prod.firebaseio.com',
      projectId: 'b2in-web-site-prod',
      storageBucket: 'b2in-web-site-prod.appspot.com',
      messagingSenderId: '228669366286',
      appId: '1:228669366286:web:09c2c800c9cefbb2005c5f'
    }),
    AngularFirestoreModule,
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    // Material
    MatInputModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    LazyLoadImageModule,
  ],
  providers: [SignUpService, HomeService],
  bootstrap: [AppComponent],
  entryComponents: [
    CookiePolicyComponent,
  ]
})
export class AppModule {}

declare global { interface Window { Savvycal: any; } }


