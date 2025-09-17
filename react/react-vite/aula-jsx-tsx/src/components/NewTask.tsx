type TaskProps = {
    description?: string;
    children: string | number;
}

const NewTask = ({description = "Nenhuma Tarefa Cadastrada", children}: TaskProps) => {
    return (
        <>
           <p>Tarefa: {description} - {children}</p>
        </>
    )
}

export {NewTask}