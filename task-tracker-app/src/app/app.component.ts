import { Component } from '@angular/core';
import { IToDoItem } from './to-do-item.model';

// import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task Tracker App';
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
		isComplete: false,
		dateCreated: new Date(),
	}
]
}
