import styles from "./InfoTasks.module.css";
import imageClipBoard from "../../assets/Clipboard.png";
import { Task } from "./Task/Task";

interface listOfTextsProps {
  id: string;
  content: string;
  checked: boolean;
}

interface InfoTasksProps{
  listTasks: listOfTextsProps[]
  setNewTask: (task: listOfTextsProps[]) => void
}

export function InfoTasks({listTasks, setNewTask}: InfoTasksProps) {

  const listOfTasksDone = listTasks.reduce((counter, obj) => {
    obj.checked === true ? (counter += 1) : null;
    return counter;
  }, 0);

  function onDeleteTasks(idToDelete: string) {
    const tasksWithoutDeletedOne = listTasks.filter((tasks) => {
      return tasks.id !== idToDelete;
    });
    setNewTask(tasksWithoutDeletedOne);
  }

  function onCompleteTask(idToCompleted: string) {
    const listOfTasksNew = listTasks.map(function (item) {
      return {
        id: item.id,
        content: item.content,
        checked: item.id == idToCompleted ? !item.checked : item.checked,
      };
    });
    setNewTask(listOfTasksNew);
  }
 

  return (
    <>
        <div className={styles.info}>
          <div className={styles.infoTarefas}>
            <p>Tarefas criadas</p>
            <span>{listTasks.length}</span>
          </div>
          <div className={styles.infoTarefas}>
            <p>Tarefas Concluidas</p>
            <span>
              {listOfTasksDone} de {listTasks.length}
            </span>
          </div>
        </div>
      <div className={styles.containerListTasks}>
        {listTasks.length ? (
          listTasks.map((text) => {
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
    </>
  );
}
