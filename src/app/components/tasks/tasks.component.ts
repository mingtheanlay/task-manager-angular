import { Component, OnInit } from '@angular/core';

// import task service from services folder
import { TaskService } from 'src/app/services/task.service';

// Fake JSON DB
import { TaskInterface } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: TaskInterface[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  destroyTask(task: TaskInterface) {
    this.taskService
      .destroyTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));

  }

  toggleReminder(task: TaskInterface) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: TaskInterface) {
    this.taskService
      .addTask(task)
      .subscribe((task) => (this.tasks.push(task)));

  }

}
