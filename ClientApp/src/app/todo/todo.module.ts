import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';


import { TodoListHeaderComponent } from '../todo/todo-list-header/todo-list-header.component';
import { TodoListFooterComponent } from '../todo/todo-list-footer/todo-list-footer.component';
import { TodoListItemComponent } from '../todo/todo-list-item/todo-list-item.component';




@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoListHeaderComponent,
    TodoComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListItemComponent]
})
export class TodoModule { }
