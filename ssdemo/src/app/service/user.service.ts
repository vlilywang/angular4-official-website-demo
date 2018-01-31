import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../bean/user';
@Injectable()
export class UserService {
        
    private headers = new Headers({'content-Type': 'application/json'});
    private usersUrl = 'api/user';
    private subUrl = 'api/subject';
    constructor(
        private http: Http,
    ) {}

    private handleError(error: any): Promise<any> {
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    }

    getUsers(): Promise<User[]>{
        return this.http.get(this.usersUrl).toPromise()
        .then(response => response.json().data as User[]).catch(this.handleError);
    }
    getUser(id: number): Promise<User>{
        const url = `${this.usersUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as User).catch(this.handleError);
    }

    create(username: string): Promise<User> {
        return this.http
        .post(this.usersUrl, JSON.stringify({username: username}),{headers: this.headers})
        .toPromise()
        .then(res => res.json().data as User)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise().then(() => null).catch(this.handleError);
    }

    update(user: User): Promise<User> {
        const url = `${this.usersUrl}/${user.id}`;
        return this.http.put(url, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then()
        .catch(this.handleError) ;
    }
}


