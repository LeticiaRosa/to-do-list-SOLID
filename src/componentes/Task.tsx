import styles from "./Tasks.module.css";
import { Trash } from "@phosphor-icons/react";
import { listOfTextsProps } from "../App.tsx";
import { useState } from "react";

interface TaskProps extends listOfTextsProps {
  onDeleteTasks: (idToDelete: string) => void;
  onCompleteTask: (idToCompleted: string) => void;
}

export function Task({
  id,
  content,
  checked,
  onCompleteTask,
  onDeleteTasks,
}: TaskProps) {
  function handleDeleteTasks() {
    onDeleteTasks(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  const [check, setCheck] = useState(false);

  function handleChecked() {
    const isChecked = !check;
    setCheck(isChecked);
    handleCompleteTask();
  }

  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input
          type="checkbox"
          id={id}
          checked={check}
          onChange={handleChecked}
        />
        <label htmlFor={id}></label>
      </div>
      <p className={styles.text}>{content}</p>

      <button title="Deleta Comentário" onClick={handleDeleteTasks}>
        <Trash size={20} />
      </button>
    </div>
  );
}
