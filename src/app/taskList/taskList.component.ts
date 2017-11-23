import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css']
})
export class UserListComponent implements OnInit {

  currentTask: Task = new Task;
  tasks: Task [];
  editor: boolean;

  constructor(private taskServise: TaskService) {
    this.setData();
    this.editor = false;
    this.tasks = taskServise.data;
  }

  ngOnInit() {
  }

  Submit() {
    this.editor = false;
    let data: Task;
    data = Object.assign({}, this.currentTask);
    this.taskServise.setData(data);
    this.setData();
  }

  doneTask(index: number) {
    this.tasks[index].progres = true;
    this.taskServise.removeData(index, this.tasks[index]);
  }

  deleteTask(index: number) {
    this.taskServise.deleteData(index);
  }

  editTask(index: number){
    this.editor = true;
    this.currentTask = this.tasks[index];
    this.tasks.splice(index, 1);
  }

  setData(){
    this.currentTask.progres = false;
    this.currentTask.summary = '';
    this.currentTask.title = '';
  }
}
