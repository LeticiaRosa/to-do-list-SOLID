import styles from "./Tasks.module.css";
import { Trash } from "@phosphor-icons/react";
import { listOfTextsProps } from "../App.tsx";

interface TaskProps extends listOfTextsProps {
  onDeleteTasks: (idToDelete: string) => void;
}

export function Task({ id, content, onDeleteTasks }: TaskProps) {
  function handleDeleteTasks() {
    onDeleteTasks(id);
  }
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}></label>
      </div>
      <p className={styles.text}>{content}</p>

      <button title="Deleta Comentário" onClick={handleDeleteTasks}>
        <Trash size={20} />
      </button>
    </div>
  );
}
