import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TodoComponent } from '../todo.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: TodoComponent;

  @Output()
  remove: EventEmitter<TodoComponent> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoComponent> = new EventEmitter();


  toggleTodoComplete(todo: TodoComponent) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: TodoComponent) {
    this.remove.emit(todo);
  }

  constructor() { }
  ngOnInit() {
  }

}
