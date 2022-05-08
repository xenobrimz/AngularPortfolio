import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-links',
  template: `
      <nb-card>
        <nb-card-body class="d-flex justify-content-center">
        <a href="https://github.com/xenobrimz"><fa-icon [icon]="github"></fa-icon></a>
        <a href="https://www.linkedin.com/in/bobby-jackson-b60690218/"><fa-icon [icon]="linked"></fa-icon></a>
        <a href="mailto: bobbyjackson13@live.com"><fa-icon [icon]="email"></fa-icon></a>
        </nb-card-body>
      </nb-card>
  `,
  styleUrls: ['./links.component.scss']
})
export class LinksComponent  {

  constructor() { }

  github = faGithubSquare;
  linked = faLinkedin;
  email = faEnvelopeSquare;

  get status() {
    return"string";
  }


}
