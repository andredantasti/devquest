
const MyFirstComponent = (props: string)=> {
  return (
    <div>
      <h1>Meu Primeiro Componente</h1>
      <p>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        recusandae dolor minima delectus totam in perferendis voluptates quam
        cupiditate quis vitae consequuntur dicta corrupti ea quibusdam, aperiam
        esse animi impedit?
      </p>
      <p>{props.title}</p>
    </div>
  );
};

export { MyFirstComponent };
