import { state, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 80,
      typeColor: 'white'
    })

    writer
      .type(': Front-End')
      .rest(500)
      .changeOps({ deleteSpeed: 30 })
      .remove(9)
      .type('Back-End')
      .rest(500)
      .remove(8)
      .type('Full-Stack Developer for hire!')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .clear()
      .start()
  }

}

