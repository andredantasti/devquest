const TodoItem = ({titulo}) => {
  console.log(titulo);
  
  return (
    <>
      <h3>Tarefa:</h3>
      
        <ul>
          <li>{titulo}</li>
        </ul>
      
    </>
  );
};

export { TodoItem };
