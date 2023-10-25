import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from '../mockData/pictures';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  categoryIdSelected: any;
  filtre: any;

  constructor(private http: HttpClient) { }

  addPicture(picture: Picture): Observable<Picture> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.post<Picture>('pictures', picture, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}




getPictureList() : Observable< Picture[]> {

  return this.http.get<Picture[]>('api/pictures').pipe(
    tap((response) => this.log(response)), // code factorisé
    catchError((error) => this.handleError(error, []))
  );
}


getPictureById(pictureId: number) : Observable<Picture|undefined> {

  return this.http.get<Picture>(`api/pictures/${pictureId}`).pipe (
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  );

}

updatePicture(picture: Picture): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.put('api/pictures', picture, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

deletePictureById(pictureId: number) : Observable<null> {
  return this.http.delete<Picture>(`api/pictures/${pictureId}`).pipe (
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
  return this.getPictureList().pipe(
    map(pictures => pictures.map(picture => picture.pictureLink)),
    catchError((error) => this.handleError(error, []))
  );
}

}
