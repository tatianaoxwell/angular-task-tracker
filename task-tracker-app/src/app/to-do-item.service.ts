import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IToDoItem } from './to-do-item.model';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ToDoItemService {
  
  inputTodo: string = '';

  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000/';


  // Read/Get
  getToDoList(): Observable<IToDoItem[]> {
    return this.http.get<IToDoItem[]>(this.apiURL + 'todo?id=1').pipe(
		catchError(this.handleError<IToDoItem[]>('getEvents', []))
		);
  }

  private handleError<T> (operation = 'operation', result?: T) {
	return (error: any): Observable<T> => {
		console.log(error);
		return of(result as T);
	}
  }

  // Post
  addTodoItem(inputTodo: IToDoItem): Observable<IToDoItem> {
    return this.http.post<IToDoItem>(this.apiURL + 'todo?id=1', inputTodo);
  }

  // Delete
  deleteItem(id: number): Observable<unknown> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }
}
