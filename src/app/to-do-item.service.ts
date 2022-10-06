import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDoItem } from './to-do-item.model';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ToDoItemService {
  inputTodo: string = '';

  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000/';

  /**Read/GET */
  getToDoList(): Observable<IToDoItem[]> {
    return this.http.get<IToDoItem[]>(`${this.apiURL}todo?id=1`);
  }

  getToDoById(id: number): Observable<IToDoItem> {
    return this.http.get<IToDoItem>(`${this.apiURL}todo?id=${id}`);
  }


/** Create/POST */
addToDo(newToDo: IToDoItem): Observable<IToDoItem> {
return this.http.post<IToDoItem>(`${this.apiURL}todo?id=1`, newToDo);
}


}




//   // Create/Post
//   addTodoItem(inputTodo: IToDoItem): Observable<void> {
//     return this.http.post<void>(this.apiURL + 'todo?id=1', inputTodo);
//   }

//   // Read/Get
//   getToDoList(): Observable<IToDoItem[]> {
//     return this.http.get<IToDoItem[]>(this.apiURL + 'todo?id=1')
//   }

//    // Create/Post
//    updateTodoItem(inputTodo: IToDoItem): Observable<void> {
//     return this.http.post<void>(this.apiURL + 'todo?id=1', inputTodo);
//   }

//   // Delete
//   deleteItem(id: number): Observable<unknown> {
//     const url = `${this.apiURL}/${id}`;
//     return this.http.delete(url);
//   }

//   private handleError<T> (operation = 'operation', result?: T) {
// 	return (error: any): Observable<T> => {
// 		console.log(error);
// 		return of(result as T);
// 	}
//   }
//
