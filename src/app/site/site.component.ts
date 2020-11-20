import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {
  EdSerService
} from '../ed-ser.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
  
})
export class SiteComponent implements OnInit {

  constructor(private scrollToService: ScrollToService, private serCred: EdSerService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    let showwoensdag = this.serCred.getsetCurrent('get', '');
    if (showwoensdag === 'woensdag'){
      setTimeout(() => {
        this.scrollTo();
      }, 100);
    }
  }


  scrollTo(){
    const config: ScrollToConfigOptions = {
      target: 'woensdag'
    };

    this.scrollToService.scrollTo(config);
    this.serCred.getsetCurrent('get', 'landing');
  }

  toRoosterr(){
    this.serCred.getsetCurrent('set', 'toroosterr');
    this.router.navigate(['yogalessen']);
  }

}
