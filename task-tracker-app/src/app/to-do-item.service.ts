import { Injectable } from '@angular/core';
import { IToDoItem } from './to-do-item.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
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
  constructor() { }
}