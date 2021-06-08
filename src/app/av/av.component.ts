import { Component, OnInit } from '@angular/core';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-av',
  templateUrl: './av.component.html',
  styleUrls: ['./av.component.css']
})
export class AvComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit() {
    setTimeout(() => {
      this.scrollTo();
    }, 100);
  }

  scrollTo(){
    const config: ScrollToConfigOptions = {
      target: 'formm'
    };

    this.scrollToService.scrollTo(config);

    
  }

}
