import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { NewToDoItemComponent } from './new-to-do-item/new-to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
	DialogComponent,
 ToDoItemComponent,
 NewToDoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MatToolbarModule,
	MatIconModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
