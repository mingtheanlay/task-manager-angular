import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Task Manager";

  constructor() { }

  ngOnInit(): void {

  }

  toggledAddTask(): void {
    console.log("Task added");
  }

}
