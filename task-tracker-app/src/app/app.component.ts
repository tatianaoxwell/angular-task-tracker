import { Component, OnInit } from '@angular/core';
import { IToDoItem } from './to-do-item.model';
import { ToDoItemService } from './to-do-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Task Tracker App';

  toDoList: IToDoItem[] = [];

  inputTodo: string = '';

  constructor(private toDoItemService: ToDoItemService) {}

  ngOnInit(): void {
    this.toDoList = this.toDoItemService.getToDoList();
  }
 addTodo() {
	this.toDoList.push({
		title: this.inputTodo,
		isComplete: false,
		dateCreated: new Date()
	});
	this.inputTodo = '';
 }
}
