import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TodoComponent } from '../todo.component';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent implements OnInit {

  @Input()
  todos: TodoComponent[];

  @Output()
  remove: EventEmitter<TodoComponent> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoComponent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleTodoComplete(todo: TodoComponent) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: TodoComponent) {
    this.remove.emit(todo);
  }

}
