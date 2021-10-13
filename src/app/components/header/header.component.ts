import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "Task Manager";
  date = new Date();

  constructor() {
    
  }

  myFunction(){
    this.date=new Date();
   }

  ngOnInit(): void {

  }

  toggledAddTask(): void {
    console.log("Task added");
  }

}
