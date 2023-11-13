import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { RateServ } from '../mockData/rate-serv';
import { RATESERV } from '../mockData/mock-RateService-list';


@Injectable({
  providedIn: 'root'
})
export class RateServService {

  constructor(private http: HttpClient) { }

  addPicture(rateServ: RateServ): Observable<RateServ> {
    const newPicture = new RateServ(rateServ.title, rateServ.rate, rateServ.description,  rateServ.pictureLink);
    RATESERV.push(newPicture);
    return of(newPicture);
  }

getRateServList()  : Observable< RateServ[]> {

  return this.http.get<RateServ[]>('api/rateServices').pipe(
    tap((response) => this.log(response)), // code factorisé
    catchError((error) => this.handleError(error, []))
  );
}

getRateById(rateServId: number) : Observable<RateServ|undefined> {

  return this.http.get<RateServ>(`api/rateServices/${rateServId}`).pipe (
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  );

}


updateRate(rateService: RateServ): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.put(`api/rateServices`, rateService, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

deleteRateById(rateServId: number) : Observable<null> {
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


// Liste des PictureLink
getPictureLinks(): Observable<string[]> {
  return this.getRateServList().pipe(
    map(rateServs => rateServs.map(rateServ => rateServ.pictureLink)),
    catchError((error) => this.handleError(error, []))
  );
}




}
