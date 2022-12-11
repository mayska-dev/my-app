import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Analyse } from './analyse';


@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(
    private http: HttpClient
  ) { }

  getAnalyseList(): Observable<Analyse[]> {
    return this.http.get<Analyse[]>('api/analyses').pipe(
      tap((analyseList => console.table(analyseList))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getAnalyse(id: number): Observable<Analyse | undefined> {
    return this.http.get<Analyse>(`api/analyses/${id}`).pipe(
      tap((analyses => console.log(analyses))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of(undefined);
      })
    );
  }
}
