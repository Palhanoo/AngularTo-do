import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private URL = 'http://localhost:3003';

  constructor(private httpClient: HttpClient) { }

  create(description: string): Observable<Todo> {
    return this.httpClient.post<Todo>(`${this.URL}/todo`, {description});
  }

  update(todo:Todo): Observable<Todo[]> {
    return this.httpClient.put<Todo[]>(`${this.URL}/todo`, todo);
  }

  delete(id: Number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/todo/${id}`);
  }

  findAll(): Observable<Todo[]> {
    console.log(this.URL)
    return this.httpClient.get<Todo[]>(`${this.URL}/todo`);
  }
}
