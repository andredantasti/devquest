
const UserCard = (props) => {
  return (
      <>    
      <h1>{props.title}</h1>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.age}</p>
      <p>E-mail: {props.email}</p>
      
     </>
  );
};

export { UserCard };
