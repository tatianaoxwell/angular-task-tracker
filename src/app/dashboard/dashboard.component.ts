import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { IToDoItem } from '../to-do-item.model';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toDoList: IToDoItem[] = [];

  constructor(private toDoItemService: ToDoItemService) {
    this.getToDoList().subscribe();
  }

  ngOnInit(): void {
    console.log(this.getToDoList);
  }
  private getToDoList(): Observable<IToDoItem[]> {
    return this.toDoItemService.getToDoList().pipe(
      tap((result: IToDoItem[]) => {
        this.toDoList = result;
        console.log('getToDoList', result);
      }),
      catchError((err: unknown) => {
        console.log('error occurred', err);
        return of([]);
      })
    );
  }

  onDelete(id: number | undefined): void {
    if (!!id) {
      this.toDoItemService
        .deleteToDo(id)
        .pipe(switchMap(() => this.getToDoList()))
        .subscribe();
    }
  }

  //   private handleError<T>(operation = 'operation', result?: T) {
  //     return (error: any): Observable<T> => {
  //       console.error(error);
  //       return of(result as T);
  //     };
  //   }
}
