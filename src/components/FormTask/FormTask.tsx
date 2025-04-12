import { PlusCircle } from "@phosphor-icons/react";
import { InputTask } from "./Input/InputTask";
import styles from "./FormTask.module.css";
import { FormEvent } from "react";


interface FormProps {
  onCreateTodo: (content: string) => void;
}

export function FormTask({ onCreateTodo }: FormProps) {
  function handleNewComment(event: FormEvent) {
    event.preventDefault();
    const inputText = document.getElementById(
      "input"
    ) as HTMLInputElement | null;  
    if (inputText?.value) {
      onCreateTodo(inputText.value);
      inputText.value = "";
    }
  }

    return (
      <form className={styles.newTasks} >
        <InputTask />
        <button type="submit" onClick={handleNewComment}>
          Criar
          <PlusCircle size={20} />
        </button>
    </form>
    )
}