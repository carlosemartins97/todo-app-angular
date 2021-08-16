import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Array<string>;
  @Output() IndexEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getTaskIndex(index: number) {
    this.IndexEvent.emit(index);
  }

}
