import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Itens } from '../model/itens';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  list: Itens[];
  private listUri = "https://playground.barato.com.br/desafio-front/api/offers"

  constructor(private http: HttpClient) { }

  /** Pega todos os itens da lista */
  getList (): Observable<Itens[]> {
    return this.http.get<Itens[]>(this.listUri)
          .pipe(
            map( itens => itens),
            catchError(this.handleError<Itens[]>('getList'))
          );
  }

  /** Caso haja um erro inesperado */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
   };
  }
}
