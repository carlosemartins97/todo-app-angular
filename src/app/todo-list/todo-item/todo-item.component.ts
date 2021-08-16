import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: string;
  isChecked: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCheck() {
    if(this.isChecked === false) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

}
