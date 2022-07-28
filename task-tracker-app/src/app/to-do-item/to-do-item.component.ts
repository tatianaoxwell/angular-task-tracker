import { Component, Input, OnInit } from '@angular/core';
import { IToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoItem: IToDoItem | undefined;

  ngOnInit(): void {}
}
