import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../modules/admin/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private httpClient:HttpClient=inject(HttpClient);

  public getUserData(): Observable<IContact[]> {
    let  apiUrl="https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<IContact[]>(apiUrl);
  }
}
