import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { RateServ } from '../mockData/rate-serv';

@Injectable({
  providedIn: 'root'
})
export class RateServService {

  constructor(private http: HttpClient) { }

  addRatServ(rateService: RateServService): Observable<RateServ> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<RateServ>('api/rateServices', rateService, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

getRateServList()  : Observable< RateServ[]> {

  return this.http.get<RateServ[]>('api/rateServices').pipe(
    tap((response) => this.log(response)), // code factorisé
    catchError((error) => this.handleError(error, []))
  );
}

getRateServById(rateServId: number) : Observable<RateServ|undefined> {

  return this.http.get<RateServ>(`api/rateServices/${rateServId}`).pipe (
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  );

}

updateRateServ(rateService: RateServ): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.put(`api/rateServices`, rateService, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

deletePictureById(rateServId: number) : Observable<null> {
  return this.http.delete<RateServ>(`api/rateServices/${rateServId}`).pipe (
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  );

}

// methode de log pour eviter la redondance de code dans les methode CRUD
private log(response: any) {
  console.table(response);
}

// methode "prendre une Erreur" pour eviter la redondance  de code dans les methode CRUD
private handleError(error: Error, errorValue: any) {
  console.error(error);
  return of(errorValue);
}

}
