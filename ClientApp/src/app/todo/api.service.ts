import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { TodoComponent } from './todo.component';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<TodoComponent[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new TodoComponent(todo));
      })
      .catch(this.handleError);
  }

  public createTodo(todo: TodoComponent): Observable<TodoComponent> {
    return this.http
      .post(API_URL + '/todos', todo)
      .map(response => {
        return new TodoComponent(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<TodoComponent> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .map(response => {
        return new TodoComponent(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: TodoComponent): Observable<TodoComponent> {
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo)
      .map(response => {
        return new TodoComponent(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/todos/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
