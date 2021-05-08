import {
  Injectable
} from '@angular/core';
import {
  inject
} from '@angular/core/testing';

export interface JsonLd {
  // tslint:disable-next-line: ban-types
  [param: string]: string | Object;
}

@Injectable({
  providedIn: 'root'
})
export class JsonLdServiceService {

  // private JsonLd | JsonLd[];

  // constructor(
  //   @Inject(DOCUMENT) private readonly document: any,
  // ) {}
  // public setData(data: JsonLd | JsonLd[]): void {
  //   this.jsonLd = data;
  //   this.inject();
  // };

  // private inject(): void {
  //   let ldJsonScriptTag = this.document.head.querySelector(`script[type='application/ld+json)']`);
  //   if (ldJsonScriptTag) {
  //     ldJsonScriptTag.textContext = JSON.stringify(this.jsonLd);
  //   } else {
  //     ldJsonScriptTag = this.document.createElement('script');
  //     ldJsonScriptTag.setAttribute('type', 'application/ld+json');
  //     ldJsonScriptTag.textContext = JSON.stringify(this.jsonLd);
  //     this.document.head.appendChild(ldJsonScriptTag);
  //   }

  // }
}
