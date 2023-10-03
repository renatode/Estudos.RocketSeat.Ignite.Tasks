import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './NewTask.module.css';

import PlusIcon from './icons/PlusIcon'

interface NewTaskProps {
    onAddNewTask: (newTask: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
    const [newTaskName, setnewTaskName] = useState('');

    function handleAddNewTask(event: FormEvent) {
        event.preventDefault();
        onAddNewTask(newTaskName);
        setnewTaskName("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        event.preventDefault();
        setnewTaskName(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <form onSubmit={handleAddNewTask} className={styles.newTaskForm}>
            <div className={styles.newTaskWapper}>
                <input type="text" name="task" placeholder='Adicione uma nova tarefa' value={newTaskName} 
                    onChange={handleNewTaskChange} onInvalid={handleNewTaskInvalid} required
                />
                <button type="submit" title="Criar Task">
                    <span>Criar</span> <PlusIcon />
                </button>
            </div>
        </form> 
    );
}