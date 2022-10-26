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
  sub!: undefined;
	getRaw: any;
  constructor(
    private toDoItemService: ToDoItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get nameCtrl(): FormControl {
    return this.editTaskForm.controls['name'] as FormControl;
  }
  ngOnInit(): void {
    this.getToDoById().subscribe();
	

    // this.sub = this.route.paramMap.subscribe(
    // 	params => {
    // 		const id = parseInt(params.get('id'));
    // 		this.getToDoById(id);
    // 	}
    // )
  }
  // ngOnDestroy(): void {
  // 	this.sub.unsubscribe();
  // }

  private createEditForm(toDoItem: IToDoItem): FormGroup {
    return this.editTaskForm = new FormGroup({
      userId: new FormControl(1),
      name: new FormControl(toDoItem.name, [Validators.required]),
      isComplete: new FormControl(false),
    });
  }
  private getToDoById(): Observable<IToDoItem> {
    const toDoId: number = parseInt(this.route.snapshot.params['id']);
    return this.toDoItemService.getToDoById(toDoId).pipe(
      tap((result: IToDoItem) => {
        this.selectedToDo = result;
       this.createEditForm(this.selectedToDo);
        console.log('selectedToDo', this.selectedToDo, 'result', result, 'selectedToDo.id', this.selectedToDo.id);
      }),
      catchError(this.handleError<IToDoItem>('getToDoById'))
    );
  }

  // TODO canDeactivate on save - fix
  onSave() {
    this.updateToDo(this.editTaskForm.getRawValue() as IToDoItem).subscribe();
  }
  private updateToDo(formValues: IToDoItem): Observable<IToDoItem> {
	// if(this.editTaskForm.valid) {
    const updatedToDo: IToDoItem = {
      id: this.selectedToDo.id,
      userId: 1,
      name: formValues.name,
      isComplete: false,
    };
	// if(this.editTaskForm.dirty) {
    return this.toDoItemService.updateToDo(updatedToDo).pipe(
      tap(() => {
		this.router.navigate(['/tasks']);
      }),
      catchError(this.handleError<IToDoItem>('updateToDo'))
    );
  }

  onClose() {
    this.router.navigate(['/tasks']);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
