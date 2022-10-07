import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  selectedToDo!: IToDoItem;
  editTaskForm!: FormGroup;
  constructor(
    private toDoItemService: ToDoItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get name(): FormControl {
    return this.editTaskForm.controls['name'] as FormControl;
  }
  ngOnInit(): void {
    this.getToDoById().subscribe();
    this.editTaskForm = new FormGroup({
      userId: new FormControl(1),
      name: new FormControl('', [Validators.required]),
      isComplete: new FormControl(false),
    });
    if (this.selectedToDo) {
      this.editTaskForm.patchValue({
        name: this.selectedToDo.name,
      });
    }
  }

  private getToDoById(): Observable<IToDoItem> {
    const toDoId: number = parseInt(this.route.snapshot.params['id']);
    return this.toDoItemService.getToDoById(toDoId).pipe(
      tap((result: IToDoItem) => {
        this.selectedToDo = result;
        console.log('selectedToDo', this.selectedToDo, this.selectedToDo.id);
      }),
      catchError(this.handleError<IToDoItem>('getToDoById'))
    );
  }

  onSave() {
    console.log('selectedToDo', this.selectedToDo, this.selectedToDo.id);

    this.updateToDo(this.editTaskForm.getRawValue() as IToDoItem).subscribe();
  }
  private updateToDo(formValues: IToDoItem): Observable<IToDoItem> {
    const updatedToDo: IToDoItem = {
      id: parseInt(this.route.snapshot.params['id']),
      //   id: this.selectedToDo.id,
      userId: 1,
      name: formValues.name,
      isComplete: false,
    };
    return this.toDoItemService.updateToDo(updatedToDo).pipe(
      tap((result: any) => {
        console.log('saveChanges', result);
      }),
      catchError(this.handleError<IToDoItem>('updateToDo'))
    );
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
