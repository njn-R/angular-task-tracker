import { Component } from '@angular/core';
import { TaskInterface } from '../../TaskInterface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: TaskInterface[] = [];

  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void { 
    this.taskService.getTasks().subscribe((tasksObservable) => this.tasks = tasksObservable)
  }

  deleteTask(task:TaskInterface) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

  toggleReminder(task:TaskInterface) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: TaskInterface) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}
