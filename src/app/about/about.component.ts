import { Component, OnInit } from '@angular/core';

import {
  EdSerService
} from '../ed-ser.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private serCred: EdSerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.serCred.getsetCurrent('set', 'about');

  }

}
