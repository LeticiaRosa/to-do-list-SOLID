import { PlusCircle } from "@phosphor-icons/react";
import { InputTask } from "./Input/InputTask";
import styles from "./Form.module.css";
import { FormEvent } from "react";

export interface listOfTextsProps {
  id: string;
  content: string;
  checked: boolean;
}

interface FormProps{
  listTasks: listOfTextsProps[]
  setNewTask: (task: listOfTextsProps[]) => void
}

export function Form({ listTasks, setNewTask }: FormProps) {

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
      setNewTask([...listTasks, ...listOfNewTasks]);
      inputText.value = "";
    }
  }

    return (
      <form className={styles.newTasks}>
        <InputTask/>
        <button type="submit" onClick={handleNewComment}>
          Criar
          <PlusCircle size={20} />{" "}
        </button>
    </form>
    )
}