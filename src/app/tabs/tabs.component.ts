import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  animations:[
    trigger('menuOptionsBackground', [
      state('DEFAULT', style({ backgroundColor: 'transparent' })),
      state('ACTIVE', style({ backgroundColor: '#93C5FE' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
