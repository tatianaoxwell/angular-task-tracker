import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { IToDoItem } from '../to-do-item.model';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toDoList: IToDoItem[] = [];
  
//   = [
// 	{
// 	  "id": 1,
// 	  "name": "delectus aut autem",
// 	  "isComplete": false
// 	},
// 	{
// 	  "id": 2,
// 	  "name": "quis ut nam facilis et officia qui",
// 	  "isComplete": false
// 	},
// 	{
// 	  "id": 3,
// 	  "name": "fugiat veniam minus",
// 	  "isComplete": false
// 	},
// 	{
// 	  "id": 4,
// 	  "name": "et porro tempora",
// 	  "isComplete": true
// 	},
// 	{
// 	  "id": 5,
// 	  "name": "laboriosam mollitia et enim quasi adipisci quia provident illum",
// 	  "isComplete": false
// 	},
// 	{
// 	  "id": 6,
// 	  "name": "qui ullam ratione quibusdam voluptatem quia omnis",
// 	  "isComplete": false
// 	},
// 	{
// 	  "id": 7,
// 	  "name": "illo expedita consequatur quia in",
// 	  "isComplete": false
// 	},
// 	{
// 	  "id": 8,
// 	  "name": "quo adipisci enim quam ut ab",
// 	  "isComplete": true
// 	}];
  errorMessage: string = '';

  inputTodo: string = '';
  constructor(private router: Router, private toDoItemService: ToDoItemService) {}

  ngOnInit(): void {
	this.getToDoList().subscribe();
  }

  private getToDoList(): Observable<IToDoItem[]>{
	return this.toDoItemService.getToDoList()
	.pipe(
		tap((result: IToDoItem[]) => {
			this.toDoList = result;
			console.log('getToDoList', result);
			
		}),
		catchError(this.handleError<IToDoItem[]>("getToDoList", []))
	)
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
