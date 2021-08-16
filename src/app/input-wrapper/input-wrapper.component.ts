import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit {
  @Output() onTaskAdded = new EventEmitter<string>();
  @ViewChild('inputTask', {static: true}) inputTask: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  AddNewTask() {
    this.onTaskAdded.emit(this.inputTask.nativeElement.value);
    this.inputTask.nativeElement.value = '';
  }

}
