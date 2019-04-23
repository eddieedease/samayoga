import { Component, OnInit, TemplateRef } from '@angular/core';

import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-kindsyoga',
  templateUrl: './kindsyoga.component.html',
  styleUrls: ['./kindsyoga.component.css']
})
export class KindsyogaComponent implements OnInit {

    // reference of modal
    modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  // opening the modal
  openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }

  closeModalNow(){
    this.modalRef.hide();
  }

}
