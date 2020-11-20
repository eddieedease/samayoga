import { Component, OnInit } from '@angular/core';

import {
  EdSerService
} from '../ed-ser.service';

@Component({
  selector: 'app-companyyoga',
  templateUrl: './companyyoga.component.html',
  styleUrls: ['./companyyoga.component.css']
})
export class CompanyyogaComponent implements OnInit {

  constructor(private serCred: EdSerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.serCred.getsetCurrent('set', 'company');

  }

}
