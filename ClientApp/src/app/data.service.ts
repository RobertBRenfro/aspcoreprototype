import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface User {
  id:number;
  name:string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Injectable()
export class DataService {
    private baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.baseUrl = baseUrl; }
  
    getUsers() {
        return this.http.get<User>(this.baseUrl + 'api/UserData/Users');
  }

    getUser(userId) {
        return this.http.get<User>(this.baseUrl + 'api/UserData/SingleUser/' + userId);
  }

  getPosts() {
      return this.http.get(this.baseUrl + 'api/PostData/GetPosts');
  }
}
