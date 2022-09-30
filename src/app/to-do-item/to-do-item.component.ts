import { Component, OnInit } from '@angular/core';
import { IToDoItem } from '../to-do-item.model';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  toDoItem: IToDoItem | undefined;
  toDoList: IToDoItem[] = [];
  errorMessage: string = '';

  constructor(private toDoItemService: ToDoItemService) {}

  ngOnInit(): void {
    // this.sub = this.toDoItemService.getToDoList().subscribe({
    //   next: (products) => {
    //     this.toDoList = this.toDoList;
    //   },
    //   error: (err) => (this.errorMessage = err),
    // });
  }

getItem(): {
	this.toDoItem = this.toDoItemService.getToDoList()
	.subscribe((data: IToDoItem) => this.toDoItem = {
		name:
		isComplete: false
	});
}

// 		next: (toDoItem) => {
// 		  this.toDoItem = this.toDoItem;
// 		},
// 		error: (err) => (this.errorMessage = err),
// 	  });
// }

  removeItem(toDoItem: IToDoItem) {
    if (!!toDoItem.id) {
      this.toDoItemService.deleteItem(toDoItem.id);
    }
  }
}

