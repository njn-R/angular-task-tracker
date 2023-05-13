import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../../TaskInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: TaskInterface
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter

  faTimes = faTimes

  onDelete(task:TaskInterface) {
    this.onDeleteTask.emit(task)
  }
  onToggle(task:TaskInterface) {
    this.onToggleReminder.emit(task)
  }
}
