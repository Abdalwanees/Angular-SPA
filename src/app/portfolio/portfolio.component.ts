import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgesSrc: string[] = [
    './assets/image/poert1.png',
    './assets/image/port2.png',
    './assets/image/port3.png',
  ];
  img1: boolean = false;
  img2: boolean = false;
  img3: boolean = false;
  show1() {
    this.img1 = true;
  }
  show2() {
    this.img2 = true;
  }
  show3() {
    this.img3 = true;
  }
  close() {
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
  }
}
