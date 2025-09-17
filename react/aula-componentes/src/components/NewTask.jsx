

const NewTask = ({ description = "Nenhuma Tarefa Cadastrada!", children }) => {
    return <p>Tarefa: {description}{children}</p>;
};

export {NewTask}