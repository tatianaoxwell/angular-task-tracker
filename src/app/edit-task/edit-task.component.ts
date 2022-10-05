import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSave() {
    console.log('');
  }
  onClose() {
    this.router.navigate(['/dashboard']);
  }
}
