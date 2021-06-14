import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CreateUser, User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any = [];
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public createUser(usuario: CreateUser) {
    const url = `${this.baseUrl}/users`;
    return this.http.post<User>(url, usuario);
  }

  public getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url);
  }

  public getUserById(id: any): Observable<User> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<User>(url);
  }

  public updateUserById(usuario: any) {
    const url = `${this.baseUrl}/users`;
    return this.http.put<User>(`${url}/${usuario._id}`, usuario);
  }

  public deleteUserById(id: any) {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete(url)
  }

  public saveUser(usuario: User) {
    this.usuario = usuario;
    localStorage.setItem('idEdit', this.usuario._id)
  }

  public getUserEdit() {
    return this.usuario;

  }

}
