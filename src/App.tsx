import { MainHeader } from './components/MainHeader';
import { NewTask } from './components/NewTask'
import { ToDoList } from './components/ToDoList';

import styles from './App.module.css'

export function App() {
  function createNewTask(taskname: string) {
    alert(taskname);
  }

  return (
    <>
      <MainHeader />
      <main className={styles.main}>
          <NewTask onAddNewTask={createNewTask} />
          <ToDoList/>
      </main>
    </>
  )
}