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
