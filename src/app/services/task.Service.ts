import {Injectable} from '@angular/core';
import {Task} from "../models/task";

@Injectable()
export class TaskService {

  public data: Array<Task> ;

  constructor () {
      this.getData();
  }

  setData(task: Task) {
    if (task.progres) {
      this.data.unshift(task);
    } else {
      this.data.push(task);
    }
    localStorage.clear();
    localStorage.setItem('toDoList', JSON.stringify(this.data));
  }

  getData() {
    this.data = JSON.parse(localStorage.getItem('toDoList')) || [];
  }

  removeData(index: number, task: Task) {
    this.deleteData(index);
    this.setData(task);
  }

  deleteData(index: number){
    this.data.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('toDoList', JSON.stringify(this.data));
  }

}
