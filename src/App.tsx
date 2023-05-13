import styles from "./App.module.css";
import logo from "./assets/Logo.png";
import "./global.css";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="" />
      </header>

      <div className={styles.container}>
        <form className={styles.tasks}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">Criar</button>
        </form>

        <div className={styles.info}>
          <div>
            <p>Tarefas Criadas</p>
            <span>0</span>
          </div>
          <div>
            <p>Tarefas Concluidas</p>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
