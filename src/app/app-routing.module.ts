import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'addtask', component: AddTaskComponent },
	{ path: 'edittask', component: EditTaskComponent },
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full'  }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }