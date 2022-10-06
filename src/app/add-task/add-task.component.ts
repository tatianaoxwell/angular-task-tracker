import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IToDoItem } from '../to-do-item.model';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  addToDoForm!: FormGroup;
  isDirty: boolean = true;
  constructor(
    private toDoItemService: ToDoItemService,
    private router: Router
  ) {}
  get title(): FormControl {
    return this.addToDoForm.controls['title'] as FormControl;
  }

  ngOnInit(): void {
    this.addToDoForm = new FormGroup({
      userId: new FormControl(1),
      name: new FormControl('', [Validators.required]),
      isComplete: new FormControl(false),
    });
  }
  // onAdd(){
  //   console.log(this.addToDoForm.getRawValue());
  // }

  onAdd() {
    this.addToDo(this.addToDoForm.getRawValue() as IToDoItem).subscribe();
  }
  private addToDo(formValues: IToDoItem): Observable<IToDoItem> {
    const newItem: IToDoItem = {
      id: 1,
      userId: 1,
      name: formValues.name,
      isComplete: false,
    };
    return this.toDoItemService.addToDo(newItem).pipe(
      tap((result: IToDoItem) => this.saveSuccess(result))
    );
  }

private saveSuccess(newItem: IToDoItem): void {
        console.log('newToDo added: ', newItem);
		this.isDirty = false;
		this.router.navigate(['/dashboard']);
}
  onClose() {
    this.router.navigate(['/dashboard']);
  }
}
