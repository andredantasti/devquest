
const Nomes = ({names}) => {
    console.log({names})
    return(
    <>
    <ul>
        {names.map((names, index) => 
        (<li key={index}>
            {names}
        </li>)
        )}
        
    </ul>
    </>
)
}

export {Nomes}