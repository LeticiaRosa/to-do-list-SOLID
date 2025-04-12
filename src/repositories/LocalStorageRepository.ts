import { IListTaskRepository } from "../interfaces/ITaskRepository";
import { Task } from "../models/Task";

export class LocalStorageRepository implements IListTaskRepository{
  getAll(): Task[] {
    const tasks = localStorage.getItem('TasksToDoList')
    if (tasks) {
      return JSON.parse(tasks)
    }
    return []
  }
  add(todo: Task): void {
    const tasks = this.getAll()
    const updatedTasks = [...tasks, todo]
    localStorage.setItem('TasksToDoList', JSON.stringify(updatedTasks))
  
  }
  toggleDone(id: string): void {
    const tasks = this.getAll()
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    })
    localStorage.setItem('TasksToDoList', JSON.stringify(updatedTasks))
  }
  remove(id: string): void {
    const tasks = this.getAll()
    const updatedTasks = tasks.filter(task => task.id !== id)
    localStorage.setItem('TasksToDoList', JSON.stringify(updatedTasks))
  }
  
}