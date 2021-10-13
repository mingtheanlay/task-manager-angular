import { Component, OnInit } from '@angular/core';

// Fake JSON DB
import { TaskInterface } from 'src/app/Task';
import { TaskData } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: TaskInterface[] = TaskData;

  constructor() { }

  ngOnInit(): void {
  }

}
