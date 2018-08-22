import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  method: 'post'
}

interface project {
  projectName: string;
  companyName: string;
  status: number;
}

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
    return this.http.get<any>('project').pipe(
      catchError(this.handleError('getProjectList', []))
    );
  }

  getDetailById(params): Observable<any> {
    return this.http.get<any>('project/'+params).pipe(
      catchError(this.handleError('getProjectById', []))
    );
  }

  updateProject(params): Observable<any> {
    return this.http.post<project>('project/update', params, httpOptions).pipe(
      catchError(this.handleError('updateProject', []))
    );
  }

  deleteProject(params): Observable<any> {
    return this.http.post<any>('project/delete', params, httpOptions).pipe(
      catchError(this.handleError('deleteProject', []))
    )
  }
}
