import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Category } from '../mockData/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<Category> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Category>('category', category, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>('api/category').pipe(
      tap((response) => this.log(response)), // code factorisé
      catchError((error) => this.handleError(error, []))
    );
  }

  getCategoryById(categoryId: number): Observable<Category|undefined> {
    return this.http.get<Category>(`api/category/${categoryId}`).pipe (
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateCategory(category: Category): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/category', category, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteCategoryById(categoryId: number): Observable<null> {
    return this.http.delete<Category>(`api/category/${categoryId}`).pipe (
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // méthode de log pour éviter la redondance de code dans les méthodes CRUD
  private log(response: any) {
    console.table(response);
  }

  // méthode "prendre une Erreur" pour éviter la redondance de code dans les méthodes CRUD
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
