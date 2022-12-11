import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Stone } from './stone';

@Injectable({
  providedIn: 'root'
})
export class StoneService {

  constructor(
    private http: HttpClient
  ) { }

  getStones(): Observable<Stone[]> {
    return this.http.get<Stone[]>('api/stones').pipe(
      tap((stonesList => console.table(stonesList))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getStone(id: number | null): Observable<Stone | undefined> {
    return this.http.get<Stone>(`api/stones/${id}`).pipe(
      tap((stone => console.log(stone))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of(undefined);
      })
    );
  }
}
