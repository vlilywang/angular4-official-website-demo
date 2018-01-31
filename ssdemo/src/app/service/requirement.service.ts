import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Requirement } from '../bean/requirement';
@Injectable()
export class RequirementService {
        
    private headers = new Headers({'content-Type': 'application/json'});
    private requitUrl = 'api/requirement';
    constructor(
        private http: Http,
    ) {}

    private handleError(error: any): Promise<any> {
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    }
    getRequirs(): Promise<Requirement[]> {
        return this.http.get(this.requitUrl).toPromise()
        .then(response => response.json().data as Requirement[]).catch(this.handleError);

    }
    getRequir(id: number): Promise<Requirement>{
        const url = `${this.requitUrl}/${id}`;
        return this.http.get(url).toPromise()
        .then(response => response.json().data as Requirement)
        .catch(this.handleError);
    }
    create(subject: string): Promise<Requirement> {
        return this.http
        .post(this.requitUrl, JSON.stringify({subject: subject}),{headers: this.headers})
        .toPromise().then(res => res.json().data as Requirement).catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.requitUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise().then(() => null).catch(this.handleError);
    }
    update(requirement: Requirement): Promise<Requirement> {
        const url = `${this.requitUrl}/${requirement.id}`;
        return this.http.put(url,JSON.stringify(requirement), {headers: this.headers})
        .toPromise().then().catch(this.handleError) ;
    }
}


