import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap,map} from 'rxjs/operators';
import { BehaviorSubject, Observable} from 'rxjs';
import {Base_url} from "../../utils/baseUrl";

import {  jwtDecode } from 'jwt-decode';


interface LoginResponse {
  accessToken: string;
  user: {
    email: string;
    password: string;
  };
}









export const TOKEN_KEY = 'my-token';
const BASE_URL = Base_url.Base_url + '/auth/signin';
const BASE_URLrg = Base_url.Base_url + '/utilisateurs/register';
const BASE_URLId = Base_url.Base_url + '/utilisateurs/id';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // Ajoutez cette ligne
  currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    this.loadToken();
  }
/*
  private decodeToken() {
    const token = this.token;
    if (token) {
      try {
        return jwtDecode(token); // Utilisez jwtDecode ici
      } catch (e) {
        console.error('Erreur de décodage du JWT', e);
        return null;
      }
    }
    return null;
  }
  

  get isAdmin(): boolean {
    const decoded = this.decodeToken();
    return decoded && decoded.role === 'Administrator';
  }

  get isConsultant(): boolean {
    const decoded = this.decodeToken();
    return decoded && decoded.role === 'Consultant';
  }

  get isRecruiter(): boolean {
    const decoded = this.decodeToken();
    return decoded && decoded.role === 'Recruiter';
  }

  get isCandidat(): boolean {
    const decoded = this.decodeToken();
    return decoded && decoded.role === 'Candidat';
  }

  get token(): string | null {
    const stringJwt = sessionStorage.getItem(TOKEN_KEY);
    if (stringJwt) {
      const modele: any = JSON.parse(stringJwt);
      return modele.jwt;
    } else {
      return null;
    }
  }
*/
  private loadToken() {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(email: string, password: string): Observable<boolean> {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    return this.http.post<LoginResponse>(BASE_URL, body, httpOptions)
      .pipe(
        tap(response => {
          sessionStorage.setItem(TOKEN_KEY, JSON.stringify(response.accessToken));
          this.isAuthenticated.next(true);
          this.currentUser$.next(response.user); // Mettez à jour currentUser$
        }),
        map(response => !!response.accessToken)
      );
  }

  register(credentials: { nom: string, prenom: string, email: string, mdp: string, dateNaissance: Date, roleId: number, telephone: string, gsm: string, actif: boolean }) {
    const body = new URLSearchParams();
    // Ajout des paramètres de body pour l'enregistrement
    return this.http.post(BASE_URLrg, body, httpOptions).pipe(
      map((data: any) => {
        if (data) {
          sessionStorage.setItem(TOKEN_KEY, JSON.stringify(data));
          this.isAuthenticated.next(true);
        } else {
          this.isAuthenticated.next(false);
        }
        return data;
      }));
  }

  getUser() {
    return this.http.get(BASE_URLId).pipe(
      map((data: any) => {
        return data;
      }));
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }

  logout() {
    sessionStorage.removeItem(TOKEN_KEY);
    this.isAuthenticated.next(false);
    this.currentUser$.next(null); // Réinitialisez currentUser$ lors de la déconnexion
  }
}
