import { IListTaskRepository } from "../interfaces/ITaskRepository";
import { Task } from "../models/Task";

export class LocalStorageRepository implements IListTaskRepository{
  getAll(): Task[] {
    throw new Error("Method not implemented.");
  }
  add(todo: Task): void {
    throw new Error("Method not implemented.");
  }
  toggleDone(id: string): void {
    throw new Error("Method not implemented.");
  }
  remove(id: string): void {
    throw new Error("Method not implemented.");
  }
  
}