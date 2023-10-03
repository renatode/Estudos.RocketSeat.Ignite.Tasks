import { MainHeader } from './components/MainHeader';
import { NewTask } from './components/NewTask'
import { ToDoList, TaskType } from './components/ToDoList';

import styles from './App.module.css'

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  function CreateNewTask(newTaskname: string) {
    setTaskList([...taskList, { id: uuidv4(), name: newTaskname, isCompleted: false }]);
  }

  function ToggleTaskCompletion(id: string) {
    const updatedTaskList = taskList.map(task => {
      if (task.id == id) {
        return {...task, isCompleted: !task.isCompleted};
      }

      return task;
    });

    setTaskList(updatedTaskList);
  }

  function DeleteTask(id: string) {
    setTaskList(
      taskList.filter(task => task.id != id)
    );
  }

  return (
    <>
      <MainHeader />
      <main className={styles.main}>
        <NewTask onAddNewTask={CreateNewTask} />
        <ToDoList taskList={taskList} onToggleTaskCompletion={ToggleTaskCompletion} onDeleteTaskCompletion={DeleteTask} />
      </main>
    </>
  )
}