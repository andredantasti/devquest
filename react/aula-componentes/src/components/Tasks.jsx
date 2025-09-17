import { NewTask } from "./NewTask";


const Tasks = () => {
        return (
            <div>
                <h2>Lista de Tarefas</h2>
                <NewTask description="Estudar React no FDS"></NewTask>
                <NewTask></NewTask>
                <NewTask></NewTask>
            </div>
        )
}

export {Tasks};