import { Task } from "../models/Task";

export interface IListTaskRepository {
  getAll(): Task[];
  add(todo: Task): void;
  toggleDone(id: string): void;
  remove(id: string): void;
  completedTasks(): number;
}

