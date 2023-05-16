import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import styles from "./App.module.css";
import logo from "./assets/Logo.png";
import { Task } from "./componentes/Task";
import "./global.css";
import { PlusCircle } from "@phosphor-icons/react";

export interface listOfTextsProps {
  id: string;
  content: string;
}

export function App() {
  const listOfTasksInitial: listOfTextsProps[] = [];

  const [listOfTasks, setListOfTasks] = useState(listOfTasksInitial);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function isNewTaskEmpty(event: FormEvent) {
    event.preventDefault();
    const convertToStringID = `${listOfTasks.length + 1}`;
    const listOfNewTasks: listOfTextsProps[] = [
      {
        id: convertToStringID,
        content: newTask,
      },
    ];
    setListOfTasks([...listOfTasks, ...listOfNewTasks]);
  }

  function onDeleteTasks(idToDelete: string) {
    console.log(idToDelete);
    const tasksWithoutDeletedOne = listOfTasks.filter((tasks) => {
      return tasks.id !== idToDelete;
    });
    console.log(tasksWithoutDeletedOne);
    setListOfTasks(tasksWithoutDeletedOne);
  }

  return (
    <main>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="" />
      </header>
      <div className={styles.containerNewTasks}>
        <form className={styles.newTasks}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTask}
          />
          <button type="submit" onClick={isNewTaskEmpty}>
            Criar
            <PlusCircle size={20} />{" "}
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.infoTarefas}>
            <p>Tarefas Criadas</p>
            <span>0</span>
          </div>
          <div className={styles.infoTarefas}>
            <p>Tarefas Concluidas</p>
            <span>0</span>
          </div>
        </div>
      </div>

      {listOfTasks ? (
        listOfTasks.map((text) => {
          return (
            <Task
              content={text.content}
              id={text.id}
              key={text.id}
              onDeleteTasks={onDeleteTasks}
            />
          );
        })
      ) : (
        <></>
      )}
    </main>
  );
}
