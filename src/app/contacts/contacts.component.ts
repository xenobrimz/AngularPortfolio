import { Component} from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LinksComponent } from '../links/links.component';


@Component({
  selector: 'app-contacts',
  template: `
  <div>
    <button nbButton (click)="openWindow()"   [outline]="true" status="primary">Contact Me</button>
  </div>

  `,
  styles: [
  ]
})
export class ContactsComponent {


  constructor(private windowService: NbWindowService) { }

  openWindow(){
    this.windowService.open(LinksComponent, { title: `Links` });
  }



}
