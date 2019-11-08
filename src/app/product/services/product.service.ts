import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Item } from '../../shared/model/item';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  list: Item;
  private listUri = "https://playground.barato.com.br/desafio-front/api/offer/"

  constructor(private http: HttpClient) { }

  /** Pega todos os itens da lista */
  getProduct (id: string): Observable<Item> {
    return this.http.get<Item>(this.listUri+id)
          .pipe(
            map( item => item),
            catchError(this.handleError<Item>('getProduct'))
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
