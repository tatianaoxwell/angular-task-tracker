import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	todo: IToDoItem | undefined;

	toDoList: IToDoItem[] = [];
	errorMessage: string = '';

	inputTodo: string = '';
  constructor(private router: Router) { }

//   ngOnInit(): {
//   }

}
