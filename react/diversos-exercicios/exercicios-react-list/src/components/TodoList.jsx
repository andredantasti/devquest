import { TodoItem } from "./TodoItem";

const TodoList = ({ tarefa }) => {

  return (
    <>
      <ul>
        {tarefa.map((tarefa) => (
          <TodoItem key={tarefa.id} titulo={tarefa.titulo}></TodoItem>
        ))}
      </ul>
    </>
    
  );
};

console.log(TodoList)

export { TodoList };
