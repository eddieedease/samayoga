import { Component, TemplateRef } from '@angular/core';

import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {



  }

  hideMenu() {
    $('.navbar-collapse').collapse('hide');
  }


   // opening the modal
   openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template,{ class: 'modal-lg' });
  }

  closeModalNow(){
    this.modalRef.hide();
  }

}
