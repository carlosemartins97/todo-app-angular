import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks: Array<string> = [];

  ngOnInit() {
    const savedTasks = localStorage.getItem('@todo-app');
    if(savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    } else {
      this.tasks = [];
    }
  }

  GetTasks(data: string) {
    this.tasks.push(data);
    localStorage.setItem("@todo-app", JSON.stringify(this.tasks));
  }
  
  onDeleteTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem("@todo-app", JSON.stringify(this.tasks));
  }
}
