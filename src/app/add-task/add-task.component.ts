import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

onSave() {
	console.log('');
}
onClose(){
	this.router.navigate(['/dashboard']);
	
}
}
