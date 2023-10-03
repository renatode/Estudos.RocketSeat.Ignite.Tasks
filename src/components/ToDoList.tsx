import styles from './ToDoList.module.css';

import clipboard from '../assets/Clipboard.png';
import CheckIcon from './icons/CheckIcon';
import TrashIcon from './icons/TrashIcon';
import DoneIcon from './icons/DoneIcon';

export function ToDoList(){
    return (
        <div className={styles.toDoListWapper}>
            <header>
                <label className={styles.criadas}>Tarefas Criadas <span className={styles.contador}>0</span></label>
                <label className={styles.concluidas}>Concluídas <span className={styles.contador}>0</span></label>
            </header>
            <div className={styles.emptyTaskList}>
                <img src={clipboard} alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.textAlt}>Crie tarefas e organize seus itens a fazer</p>
            </div>
            <div className={styles.taskList}>
                <div>
                    <CheckIcon className={styles.checkIcon}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <TrashIcon className={styles.trashIcon}/>
                </div>
                <div className={styles.concluida}>
                    <DoneIcon className={styles.doneIcon}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <TrashIcon className={styles.trashIcon}/>
                </div>
            </div>
        </div>
    );
}