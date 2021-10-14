import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/Task';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: TaskInterface;
  faCheckCircle = faCheckCircle;

  @Output() onDestoryTask: EventEmitter<TaskInterface> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onDestroy(task: TaskInterface) {
    this.onDestoryTask.emit(task);
  }

}
