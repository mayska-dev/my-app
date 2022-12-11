import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap, throwError } from 'rxjs';
import { Homeopathy } from './homeopathy';


@Injectable({
  providedIn: 'root'
})
export class HomeopathyService {

  constructor(private http: HttpClient) { }

  getHomeopaties(): Observable<Homeopathy[]> {
    return this.http.get<Homeopathy[]>('api/homeopaties').pipe(
      tap((homeopathieList => console.table(homeopathieList))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getHomeopatie(id: number | null): Observable<Homeopathy | undefined> {
    return this.http.get<Homeopathy>(`api/homeopaties/${id}`).pipe(
      tap((homeopathie => console.log(homeopathie))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of(undefined);
      })
    );
  }


}
