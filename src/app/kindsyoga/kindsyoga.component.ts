import { Component, OnInit, TemplateRef } from '@angular/core';

import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {
  EdSerService
} from '../ed-ser.service';

import { Router, ActivatedRoute } from '@angular/router';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-kindsyoga',
  templateUrl: './kindsyoga.component.html',
  styleUrls: ['./kindsyoga.component.css']
})
export class KindsyogaComponent implements OnInit {

    // reference of modal
    modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private serCred: EdSerService, private router: Router, private route: ActivatedRoute, private scrollToService: ScrollToService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    

    let showwoensdag = this.serCred.getsetCurrent('get', '');
    if (showwoensdag === 'toroosterr'){
      setTimeout(() => {
        this.scrollTo();
      }, 100);
    } else {
      this.serCred.getsetCurrent('set', 'kindsyoga');
    }
  }

  toWoensdag(){
    this.serCred.getsetCurrent('set', 'woensdag');
    this.router.navigate(['site']);
  }

  scrollTo(){
    const config: ScrollToConfigOptions = {
      target: 'roosterr'
    };

    this.scrollToService.scrollTo(config);
    this.serCred.getsetCurrent('set', 'kindsyoga');

    
  }

  // opening the modal
  openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }

  closeModalNow(){
    this.modalRef.hide();
  }

}
