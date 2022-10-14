import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditTaskGuard } from './edit-task/edit-task.guard';

const routes: Routes = [
	{ path: 'tasks', component: DashboardComponent },
	{ path: 'tasks/0/edit', component: AddTaskComponent },
	{ path: 'tasks/edit/:id', canDeactivate: [EditTaskGuard], component: EditTaskComponent },
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full'  }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }