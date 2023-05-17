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
  // checked: boolean;
}

export function App() {
  const listOfTasksInitial: listOfTextsProps[] = [];

  const [listOfTasks, setListOfTasks] = useState(listOfTasksInitial);
  const [listOfTasksDone, setListOfTasksDone] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function isNewTaskEmpty(event: FormEvent) {
    event.preventDefault();
    const convertToStringID = `${Math.random()}`;
    const listOfNewTasks: listOfTextsProps[] = [
      {
        id: convertToStringID,
        content: newTask,
        // checked: false,
      },
    ];
    setListOfTasks([...listOfTasks, ...listOfNewTasks]);
  }

  function onDeleteTasks(idToDelete: string) {
    const tasksWithoutDeletedOne = listOfTasks.filter((tasks) => {
      return tasks.id !== idToDelete;
    });
    setListOfTasks(tasksWithoutDeletedOne);
  }

  function onCompleteTask(idToCompleted: string) {
    const tasksDone = listOfTasksDone.filter((tasks) => {
      return tasks !== idToCompleted;
    });
    tasksDone.length !== listOfTasksDone.length
      ? setListOfTasksDone([...tasksDone])
      : setListOfTasksDone([...tasksDone, idToCompleted]);
  }
  console.log("renderizou");
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
            <span>{listOfTasks.length}</span>
          </div>
          <div className={styles.infoTarefas}>
            <p>Tarefas Concluidas</p>
            <span>{listOfTasksDone.length}</span>
          </div>
        </div>
      </div>

      {listOfTasks ? (
        listOfTasks.map((text) => {
          return (
            <Task
              content={text.content}
              id={text.id}
              onCompleteTask={onCompleteTask}
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
