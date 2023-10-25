import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Rate } from '../mockData/rate';

@Injectable({
  providedIn: 'root'
})
export class RateServService {

  constructor(private http: HttpClient) { }

  addRatServ(rateService: RateServService): Observable<Rate> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<Rate>('api/rateServices', rateService, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

getRateServList()  : Observable< Rate[]> {

  return this.http.get<Rate[]>('api/rateServices').pipe(
    tap((response) => this.log(response)), // code factorisé
    catchError((error) => this.handleError(error, []))
  );
}

getRateById(rateServId: number) : Observable<Rate|undefined> {

  return this.http.get<Rate>(`api/rateServices/${rateServId}`).pipe (
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  );

}








updateRate(rateService: Rate): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.put(`api/rateServices`, rateService, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

deleteRateById(rateServId: number) : Observable<null> {
  return this.http.delete<Rate>(`api/rateServices/${rateServId}`).pipe (
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
