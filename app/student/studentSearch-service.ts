import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp, Response, Http, Headers } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class SearchService {

  constructor(private http: Http, private jsonp: Jsonp) {}

  search(terms: Observable<string>, debounceDuration = 400) {
    return terms.debounceTime(debounceDuration)
                .distinctUntilChanged()
                .switchMap(term => this.rawSearch(term));
  }

  rawSearch (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('./students', { search })
                .map((request) => request.json()[1]);
  }

  getStudents(){
    let headers = new Headers({ 'employee': 1 })
    let token = "token"
    return this.http
                .get('http://localhost:8443/students/?token=' + token)
                .map((res: Response) => this.extractData(res))
                .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
