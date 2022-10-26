import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditTaskComponent } from './edit-task.component';

@Injectable({
  providedIn: 'root'
})
export class EditTaskGuard implements CanDeactivate<EditTaskComponent> {
  canDeactivate(
    component: EditTaskComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if(component.editTaskForm.dirty) {
			const toDoName = component.nameCtrl.value;
			return confirm(`Navigate away and lose changes to "${toDoName}" task?`);
		}
    return true;
  }
  
}
