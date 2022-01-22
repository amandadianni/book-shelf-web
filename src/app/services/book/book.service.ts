import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/core/models/book.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
import { Paginated } from 'src/app/core/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private readonly httpClient: HttpClient) { }

  addBook = (book: Book): Observable<Book> => {
    return this.httpClient.post<Book>(`${environment.apiPath}/books`, book).pipe(map((value: Book, index: number) => value));
  };

  getBooks = (): Observable<Paginated<Book>> => {
    return this.httpClient.get<Paginated<Book>>(`${environment.apiPath}/books`).pipe(map((value: any, index: number) => value['books']));
  };

}
