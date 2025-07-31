import { Injectable } from '@angular/core';
import { dummyTasks } from "../dummy-tasks";
import {type newTask } from "./new-task/new-task.model";

@Injectable({
  providedIn: 'root',
})
export  class TaskService {
// Output for task selection, passing the tasks to the tasks component
  private tasks = dummyTasks;
   
 constructor() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    this.tasks = JSON.parse(storedTasks);
  }
 }
 getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  
  AddTask(taskData:newTask, userId: string){
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });
    this.saveTasks();
  }

onremoveTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}