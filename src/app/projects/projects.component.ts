import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class=" d-flex flex-column flex-wrap">
    <nb-reveal-card class="col text-center m-2">
    <nb-card-front >
        <nb-card>
          <nb-card-body>
            <h1>Barber College</h1>
            <h5>Java/spring-boot</h5>
          </nb-card-body>
        </nb-card>
      </nb-card-front>
      <nb-card-back>
        <nb-card>
          <nb-card-body>
            <h5>Java website for for hosting a local barber college contact and pricing information</h5>
            <a nbButton outline status="primary" href=" http://goodfellascollege.ddns.net/ ">View Site</a>
          </nb-card-body>
        </nb-card>
      </nb-card-back>
    </nb-reveal-card>

    <nb-reveal-card class="col text-center m-2">
    <nb-card-front >
        <nb-card>
          <nb-card-body>
            <h1>Match-Three</h1>
            <h5>Angular</h5>
          </nb-card-body>
        </nb-card>
      </nb-card-front>
      <nb-card-back>
        <nb-card>
          <nb-card-body>
            <h5>Downloadable, Tic-Tac-Toe Angular Progressive web application</h5>
            <a nbButton outline status="primary" href=" https://matchthree.web.app/ ">View Site</a>
          </nb-card-body>
        </nb-card>
      </nb-card-back>
    </nb-reveal-card>


    <nb-reveal-card class="col text-center m-2">
    <nb-card-front >
        <nb-card>
          <nb-card-body>
            <h1>SocialBuzz</h1>
            <h5>Java/spring-boot | MySQL</h5>
          </nb-card-body>
        </nb-card>
      </nb-card-front>
      <nb-card-back>
        <nb-card>
            <nb-card-body>
            <h5>Java website for storing user generated data and ranking them</h5>
            <a nbButton outline status="primary" href=" http://socialbuzz.ddns.net/ ">View Site</a>
            </nb-card-body>
        </nb-card>
      </nb-card-back>
    </nb-reveal-card>

  </div>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  width = 200;
  constructor() { }

  ngOnInit(): void {
  }

}
