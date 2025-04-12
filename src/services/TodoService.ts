import { IListTaskRepository } from "../interfaces/ITaskRepository";
import { Task } from "../models/Task";

export class TodoService {
  constructor(
    private todoRepository: IListTaskRepository
  ){}

  getTodos(): Task[] {
    return this.todoRepository.getAll();
  }

  createTodo(title: string): void {
    if (!title.trim()) throw new Error("O título da tarefa não pode ser vazio.");
    const todo = new Task(`${Math.random()}`, title);
    this.todoRepository.add(todo);
  }

  toggleTodoDone(id: string): void {
    this.todoRepository.toggleDone(id);
  }

  deleteTodo(id: string): void {
    this.todoRepository.remove(id);
  }

  completedTasks(): number {
    return this.todoRepository.completedTasks();
  }

}