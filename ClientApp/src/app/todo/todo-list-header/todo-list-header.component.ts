import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TodoComponent } from '../todo.component';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: TodoComponent = new TodoComponent();

  @Output()
  add: EventEmitter<TodoComponent> = new EventEmitter();



  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new TodoComponent();
  }


  constructor() { }
  ngOnInit() {
  }

}
