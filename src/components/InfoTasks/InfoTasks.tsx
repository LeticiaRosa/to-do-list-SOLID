import styles from "./InfoTasks.module.css";
import imageClipBoard from "../../assets/Clipboard.png";
import { Task } from "./Task/Task";
import { ITask } from "../../interfaces/ITask";


interface InfoTasksProps{
  listTasks: ITask[];
  onToggleDone: (idToCompleted: string) => void;
  onDelete: (idToDelete: string) => void;
  completedTasks: number;
}

export function InfoTasks({listTasks, onToggleDone, onDelete, completedTasks}: InfoTasksProps) {
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
            {completedTasks} de {listTasks.length}
            </span>
          </div>
        </div>
      <div className={styles.containerListTasks}>
        {listTasks.length ? (
          listTasks.map((text) => {
            return (
              <Task
                title={text.title}
                id={text.id}
                done={text.done}
                onCompleteTask={onToggleDone}
                key={text.id}
                onDeleteTasks={onDelete}
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
