import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from '../mockData/pictures';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { PICTURES } from '../mockData/mock-pictures-list';


@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private picturesUrl = 'api/pictures'; // URL de l'API

  constructor(private http: HttpClient) { }

  addPicture(picture: Picture): Observable<Picture> {
    const newPicture = new Picture(picture.name, picture.pictureLink, picture.category);
    PICTURES.push(newPicture);
    return of(newPicture);
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
