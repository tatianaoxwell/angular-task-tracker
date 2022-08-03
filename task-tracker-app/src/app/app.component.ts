import { Component, OnInit } from '@angular/core';
import { IToDoItem } from './to-do-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Task Tracker App';
  private _listFilter: string = '';

  get listFilter(): string {
	return this._listFilter;
  }
  set listFilter(value: string) {
	this._listFilter = value;
	this.filteredList = this.performFilter(value);
  }
  filteredList: IToDoItem[] = [];
  
  toDoList: IToDoItem[] = [
    {
      title: 'Go shopping',
      isComplete: false,
      dateCreated: new Date(),
    },
    {
      title: 'Put shopping away',
      isComplete: false,
      dateCreated: new Date(),
    },
    {
      title: 'Cook dinner',
      isComplete: true,
      dateCreated: new Date(),
    },
  ];
  ngOnInit(): void {
    this.listFilter = 'default';
  }
  performFilter(valueToFilterBy: string): IToDoItem[] {
	valueToFilterBy = valueToFilterBy.toLowerCase();
	return this.toDoList.filter((item: IToDoItem) =>
		item.title.toLowerCase().includes(valueToFilterBy));
  }
}
