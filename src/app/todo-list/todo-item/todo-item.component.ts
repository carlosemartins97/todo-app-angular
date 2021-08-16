import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task: string;
  @Output() taskToDelete = new EventEmitter<string>();
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

  DeleteTask() {
    this.taskToDelete.emit(this.task);
  }

}
