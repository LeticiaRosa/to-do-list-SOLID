import { FormEvent, InvalidEvent, useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/Logo.png";
import { Task } from "./componentes/Task";
import "./global.css";
import { PlusCircle } from "@phosphor-icons/react";
import imageClipBoard from "./assets/Clipboard.png";

export interface listOfTextsProps {
  id: string;
  content: string;
  checked: boolean;
}

export function App() {
  const listOfTasksInitial: listOfTextsProps[] = [];

  const [listOfTasks, setListOfTasks] = useState(listOfTasksInitial);

  const listOfTasksDone = listOfTasks.reduce((counter, obj) => {
    obj.checked === true ? (counter += 1) : null;
    return counter;
  }, 0);

  function handleNewComment(event: FormEvent) {
    event.preventDefault();
    const inputText = document.getElementById(
      "input"
    ) as HTMLInputElement | null;
    if (inputText?.value) {
      const convertToStringID = `${Math.random()}`;
      const listOfNewTasks: listOfTextsProps[] = [
        {
          id: convertToStringID,
          content: inputText.value,
          checked: false,
        },
      ];
      setListOfTasks([...listOfTasks, ...listOfNewTasks]);
      inputText.value = "";
    }
  }

  function onDeleteTasks(idToDelete: string) {
    const tasksWithoutDeletedOne = listOfTasks.filter((tasks) => {
      return tasks.id !== idToDelete;
    });
    setListOfTasks(tasksWithoutDeletedOne);
  }

  function onCompleteTask(idToCompleted: string) {
    const listOfTasksNew = listOfTasks.map(function (item) {
      return {
        id: item.id,
        content: item.content,
        checked: item.id == idToCompleted ? !item.checked : item.checked,
      };
    });
    setListOfTasks(listOfTasksNew);
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <main>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="" />
      </header>
      <div className={styles.containerNewTasks}>
        <form className={styles.newTasks}>
          <input
            id="input"
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            onInvalid={handleNewCommentInvalid}
          />
          <button type="submit" onClick={handleNewComment}>
            Criar
            <PlusCircle size={20} />{" "}
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.infoTarefas}>
            <p>Tarefas criadas</p>
            <span>{listOfTasks.length}</span>
          </div>
          <div className={styles.infoTarefas}>
            <p>Tarefas Concluidas</p>
            <span>
              {listOfTasksDone} de {listOfTasks.length}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.containerListTasks}>
        {listOfTasks.length ? (
          listOfTasks.map((text) => {
            return (
              <Task
                content={text.content}
                id={text.id}
                checked={text.checked}
                onCompleteTask={onCompleteTask}
                key={text.id}
                onDeleteTasks={onDeleteTasks}
              />
            );
          })
        ) : (
          <div className={styles.withoutTasks}>
            <div className={styles.lineContainer}>
              <div className={styles.line}></div>
            </div>

            <div className={styles.container}>
              <img
                className={styles.imageClipBoard}
                src={imageClipBoard}
                alt=""
              />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
