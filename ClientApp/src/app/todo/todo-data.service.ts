import { Injectable } from '@angular/core';
import { TodoComponent } from './todo.component';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class TodoDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(todo: TodoComponent): Observable<TodoComponent> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<TodoComponent> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: TodoComponent): Observable<TodoComponent> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<TodoComponent[]> {
    return this.api.getAllTodos().delay(3000);
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<TodoComponent> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: TodoComponent) {
       todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
