import styles from './NewTask.module.css';

import PlusIcon from './icons/PlusIcon'

interface NewTaskProps {
    onAddNewTask: (newTask: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
    return (
        <div className={styles.newTaskWapper}>
            <input type='text' required name="task" placeholder='Adicione uma nova tarefa' />
            <button title="Criar Task">
                <span>Criar</span> <PlusIcon />
            </button>
        </div>
    );
}