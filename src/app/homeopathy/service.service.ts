import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap, throwError } from 'rxjs';
import { Homeopathie } from './homeopathy.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getHomeopaties(): Observable<Homeopathie[]> {
    return this.http.get<Homeopathie[]>('api/homeopaties').pipe(
      tap((homeopathieList => console.table(homeopathieList))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getHomeopatie(id: number | null): Observable<Homeopathie | undefined> {
    return this.http.get<Homeopathie>(`api/homeopaties/${id}`).pipe(
      tap((homeopathie => console.log(homeopathie))),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of(undefined);
      })
    );
  }


}
