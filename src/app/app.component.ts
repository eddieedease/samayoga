import { Component } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  
  dt = new Date();
  yearr = this.dt.getFullYear();

  hideMenu() {
    $('.navbar-collapse').collapse('hide');
  }

}
