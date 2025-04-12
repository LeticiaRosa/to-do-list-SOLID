import "../css/global.css";
import { Header } from "../components/Header/Header";
import { FormTask } from "../components/FormTask/FormTask";
import styles from "./TaskPage.module.css";
import { InfoTasks } from "../components/InfoTasks/InfoTasks";
import { TodoService } from "../services/TodoService";
import { useState } from "react";
import { LocalStorageRepository } from "../repositories/LocalStorageRepository";

  
export function TaskPage() {
  const repository = new LocalStorageRepository();
  const service = new TodoService(repository);
  const [listTasks, setListTasks] = useState(service.getTodos());

  function handleCreateTodo(content: string) {
    service.createTodo(content);
    setListTasks(service.getTodos());
  }

  function handleToggleDone(id: string) {
    service.toggleTodoDone(id);
    setListTasks(service.getTodos());
  }

  function handleDeleteTodo(id: string) {
    service.deleteTodo(id);
    setListTasks(service.getTodos());
  }
 
  return (
    <main>
      <Header />
      <div className={styles.containerNewTasks}>
        <FormTask onCreateTodo={handleCreateTodo} />
        <InfoTasks
          listTasks={listTasks}
          onToggleDone={handleToggleDone}
          onDelete={handleDeleteTodo}
          completedTasks={service.completedTasks()}
        />
      </div>
    </main>
  );
}
