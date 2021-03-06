import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';

import {
  throttleTime
} from 'rxjs/operators';
import {
  map
} from 'rxjs/operators';

import {
  environment
} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EdSerService {


  __currentPage = "";

  constructor(private http_: Http) {

  }


  getsetCurrent(_method, _currentpage) {
    let val;
    switch (_method) {
      case 'get':
        return this.__currentPage;
      case 'set':
        this.__currentPage = _currentpage;
        break;
    };
  };

  // Create publication
  API_sendcontactform(_mail, _name, _message, _tel): Observable < any > {
    // tslint:disable-next-line:max-line-length
    const url = environment.apilink + 'sendcontactform?rnd=' + new Date().getTime();
    // let blobReplaceUserId = jsonblobstring.replace('__userid__', '' + this.curID);
    const upt = {
      'email': _mail,
      'name': _name,
      'message': _message,
      'tel': _tel
    };
    const body = JSON.stringify(upt);
    // const howmanykb = this.byteCount(body);
    // Line beneath show how many KB
    // console.log('JSONBLOB = ' + howmanykb + ' Bytes');
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache',
      'Expires': '0',
      'Pragma': 'no-cache'
      /*  ,'Authorization': 'bearer ' + this.curTOKEN */
    });
    const options = new RequestOptions({
      headers: headers,
      method: 'post'
    });
    return this.http_.post(url, body, options)
      .pipe(throttleTime(5000))
      .pipe(map(res => res.json()));
  }

}
