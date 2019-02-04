import { Component, OnInit } from '@angular/core';
import { TodoDataService} from './todo-data.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  title: string = '';
  complete: boolean = false;
   
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


  
  ngOnInit() {  }
   
}



