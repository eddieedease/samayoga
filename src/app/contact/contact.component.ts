import {
  Component,
  OnInit
} from '@angular/core';

import {
  EdSerService
} from '../ed-ser.service';

import {
  ToastrService
} from 'ngx-toastr';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // currents
  currentName = '';
  currentEmail = '';
  currentSubject = '';
  currentMessage = '';


  constructor(private edSer: EdSerService, private toastr: ToastrService, private scrollToService: ScrollToService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.edSer.getsetCurrent('set', 'contact');

    /* setTimeout(() => {
      this.scrollTo();
    }, 0); */
  }

  sendMail() {
    if (this.currentEmail !== '' && this.currentMessage !== '' && this.currentName !== '') {
      // tslint:disable-next-line:max-line-length
      this.edSer.API_sendcontactform(this.currentEmail, this.currentName, this.currentMessage, this.currentSubject).subscribe(value => this.contactFormSend(value));
    } else {
      this.toastr.warning('Nog niet alles ingevuld', '');
    }
  }


  contactFormSend(_resp) {
    // this.edSer.debugLog(_resp);
    this.currentName = '';
    this.currentEmail = '';
    this.currentSubject = '';
    this.currentMessage = '';
    this.toastr.success('Bedankt!', 'Ik doe mijn best zo snel mogelijk te reageren.');
  }

  scrollTo(){
    const config: ScrollToConfigOptions = {
      target: 'formm'
    };

    this.scrollToService.scrollTo(config);

    
  }

}
