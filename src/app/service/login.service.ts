import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseApiUrl = environment.urlBaseApi ;
  private urlApi = `${this.baseApiUrl}auth/login`

  constructor(private http: HttpClient ) { }

  fazerLogin(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlApi, user)
  }
}
