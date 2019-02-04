import { Component, Input, OnInit } from '@angular/core';
import { TodoComponent } from '../todo.component';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit{

  @Input()
  todos: TodoComponent[];

  constructor() { }

  ngOnInit() {}

}
