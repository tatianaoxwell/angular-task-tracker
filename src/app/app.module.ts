import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AddTaskComponent, EditTaskComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
	MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
	FormsModule,
	MatButtonModule,
	MatIconModule,
	HttpClientModule,
	AppRoutingModule,
	MatSelectModule,
	MatDatepickerModule,
	MatRadioModule,
	MatDialogModule,
	MatNativeDateModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
