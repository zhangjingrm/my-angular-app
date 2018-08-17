import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.messages}`);

      return of(result as T);
    }
  }

  constructor(private http: HttpClient) { }

  getProject(): Observable<any[]> {
    return this.http.get<any>('http://localhost:3000/project').pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }
}
