import { Component } from '@angular/core';
import { IToDoItem } from './to-do-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Task Tracker App';
  filterBy: string = '';
  toDoList: IToDoItem[] = [
	{
		title: 'Go shopping',
		isComplete: false,
		dateCreated: new Date(),
	},
	{
		title: 'Put shopping away',
		isComplete: false,
		dateCreated: new Date(),
	},
	{
		title: 'Cook dinner',
		isComplete: true,
		dateCreated: new Date(),
	}
]
}
