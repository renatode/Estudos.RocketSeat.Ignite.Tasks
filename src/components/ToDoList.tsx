import styles from './ToDoList.module.css';

import clipboard from '../assets/Clipboard.png';
import CheckIcon from './icons/CheckIcon';
import TrashIcon from './icons/TrashIcon';
import DoneIcon from './icons/DoneIcon';

export interface TaskType {
    id: string,
    name: string,
    isCompleted: boolean
};

interface TodoListProps {
    taskList: TaskType[],
    onToggleTaskCompletion: (id: string) => void,
    onDeleteTaskCompletion: (id: string) => void
}

export function ToDoList({ taskList, onToggleTaskCompletion, onDeleteTaskCompletion }: TodoListProps) {
    const isEmpty = taskList.length == 0;
    const createdCount = taskList.length;
    const doneCount = taskList.filter(task => task.isCompleted).length;

    function handleTaskCompletion(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        onToggleTaskCompletion(event.currentTarget.id);
    }

    function handleDeleteTask(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        onDeleteTaskCompletion(event.currentTarget.id);
    }

    return (
        <div className={styles.toDoListWapper}>
            <header>
                <label className={styles.criadas}>
                    Tarefas Criadas <span className={styles.contador}>{createdCount}</span>
                </label>
                <label className={styles.concluidas}>
                    Concluídas <span className={styles.contador}>{`${doneCount} de ${createdCount}`}</span>
                </label>
            </header>

            {isEmpty &&
                <div className={styles.emptyTaskList}>
                    <img src={clipboard} alt="" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.textAlt}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }

            {taskList.map(task => {
                return (
                    <div className={styles.task} key={task.id}>
                        <div>
                            <button onClick={handleTaskCompletion} id={task.id} title="Tarefa concluída?">
                                {task.isCompleted ?
                                    <DoneIcon className={styles.doneIcon} /> :
                                    <CheckIcon className={styles.checkIcon} />
                                }
                            </button>
                            <p className={task.isCompleted ? styles.concluida : ""}>{task.name}</p>
                            <button onClick={handleDeleteTask} id={task.id} title="Excluir Tarefa">
                                <TrashIcon className={styles.trashIcon} />
                            </button>

                        </div>
                    </div>
                )
            })}
        </div>
    );
}