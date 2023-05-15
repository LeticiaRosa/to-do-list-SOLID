import styles from "./App.module.css";
import logo from "./assets/Logo.png";
import "./global.css";
import { PlusCircle } from "@phosphor-icons/react";

export function App() {
  return (
    <main>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="" />
      </header>

      <div className={styles.containerTasks}>
        <form className={styles.tasks}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
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
    </main>
  );
}
