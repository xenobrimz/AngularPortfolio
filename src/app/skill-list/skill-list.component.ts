import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  template: `
  <div class="row">
    <nb-card class=" col shadow">
        <nb-list >
          <nb-list-item>
            <h1>HTML</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>CSS</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>Angular.js</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>React.js</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>Angular</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>JQuery</h1>
          </nb-list-item>
        </nb-list>
      </nb-card>

      <nb-card class=" col shadow">
        <nb-list >
          <nb-list-item>
            <h1>Java | SpringBoot</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>Python</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>JavaScript | Node.js</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>Mysql</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>MongoDB</h1>
          </nb-list-item>
          <nb-list-item>
            <h1>Express</h1>
          </nb-list-item>
        </nb-list>
      </nb-card>
  </div>

  `,
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
