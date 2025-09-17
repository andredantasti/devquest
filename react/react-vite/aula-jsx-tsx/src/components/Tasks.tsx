import { NewTask } from "./NewTask"

const Tasks = () => {
    return(
        <>
        <h2>Lista de Tarefas:</h2>
        <NewTask description="Estudar React com Typescript">Meus Bagos</NewTask>
        <NewTask description="Estudar Typescript">789</NewTask>
        <NewTask>123</NewTask>
        <NewTask>456</NewTask>

        </>
    )
}

export {Tasks}