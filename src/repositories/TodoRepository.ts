import { IListTaskRepository } from "../interfaces/ITaskRepository";
import { Task } from "../models/Task";


export class TodoRepository implements IListTaskRepository {
  private listTask: Task[] = [];

  getAll(): Task[] {
    return this.listTask;
  }

  add(todo: Task): void {
    this.listTask.push(todo);
  }

  toggleDone(id: string): void {
    this.listTask = this.listTask.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
  }

  remove(id: string): void {
    this.listTask = this.listTask.filter(task => task.id !== id);
  }

  completedTasks(): number {
    return this.getAll().filter((task) => task.done).length
  }
}