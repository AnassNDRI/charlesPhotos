import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from '../mockData/pictures';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

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

// // recherche per autoCompletion avec la librairie RXJS
// searchPictureList(term: string): Observable<Picture[]> {
//   // cette condition impose une saisi pour la recherche au moins à 2 lettres
//   // pour ne pas soliciter inutilement le serveur.
//   if(term.length <= 1) {
//     return of([]);
//   }
//   return this.http.get<Picture[]>(`api/pictures/?name=${term}`).pipe(
//     tap((response) => this.log(response)),
//     catchError((error) => this.handleError(error, []))
//   );

// }
getPictureList() : Observable< Picture[]> {

  return this.http.get<Picture[]>('pictures').pipe(
    tap((response) => this.log(response)), // code factorisé
    catchError((error) => this.handleError(error, []))
  );
}

getPictureById(pictureId: number) : Observable<Picture|undefined> {

  return this.http.get<Picture>(`pictures/${pictureId}`).pipe (
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, undefined))
  );

}

updatePicture(picture: Picture): Observable<null> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.put('pictures', picture, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
  );

}

deletePictureById(pictureId: number) : Observable<null> {
  return this.http.delete<Picture>(`pictures/${pictureId}`).pipe (
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

// getPictureCategoryList() : Observable< Category[]> {

//   return this.http.get<Category[]>('api/category').pipe(
//     tap((response) => this.log(response)), // code factorisé
//     catchError((error) => this.handleError(error, []))
//   );
// }

getPictureCategoryList(): string[] {

  return [
    'Couple',
    'Mariage',
    'Grossesse',
    'Bébé',
    'Famille',
    'Baptème'
  ];
}

}
