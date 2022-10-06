import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IToDoItem } from '../to-do-item.model';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  selectedToDo: IToDoItem | undefined;
  constructor(
    private toDoItemService: ToDoItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getToDoById().subscribe();
  }

  private getToDoById(): Observable<IToDoItem> {
    const toDoId: number = Number(this.route.snapshot.params['id']);
    return this.toDoItemService.getToDoById(toDoId).pipe(
      tap((result: IToDoItem) => {
        this.selectedToDo = result;
      }),
      catchError(this.handleError<IToDoItem>('getToDoById'))
    );
  }

  onSave() {
    console.log('');
  }
  onClose() {
    this.router.navigate(['/dashboard']);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
