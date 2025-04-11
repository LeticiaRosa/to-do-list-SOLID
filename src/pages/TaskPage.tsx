import "../css/global.css"
import { Header } from "../components/Header/Header";
import { Form, listOfTextsProps } from "../components/Form/Form";
import styles from "./TaskPage.module.css";
import { useState } from "react";
import { InfoTasks } from "../components/InfoTasks/InfoTasks";

export function TaskPage() {
  const listOfTasksInitial: listOfTextsProps[] = [];
  const [listOfTasks, setListOfTasks] = useState(listOfTasksInitial);
    return (
      <main>
        <Header/> 
        <div className={styles.containerNewTasks}>
          <Form setNewTask={setListOfTasks} listTasks={listOfTasks}/> 
          <InfoTasks listTasks={listOfTasks} setNewTask={setListOfTasks}/>
        </div>
      </main>
    )
}