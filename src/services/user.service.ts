import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.local'

const API = environment.API;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable <any>{
    return this.http.get(`${API}users`, httpOptions);
  }

  getById(UserId: number): Observable<any>{
    return this.http.get(`${API}users/${UserId}`, httpOptions);
  }

  createUser(data): Observable<any>{
    return this.http.post(`${API}.users/`, data, httpOptions);
  }

  updateUser(UserId, data): Observable<any>{
    return this.http.put(`${API}users/${UserId}`, data, httpOptions)
  }

  deleteUser(UserId): Observable<any>{
    return this.http.delete(`${API}users/${UserId}`);
  }
}
