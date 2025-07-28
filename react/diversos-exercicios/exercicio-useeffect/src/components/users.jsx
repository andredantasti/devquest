import { useQuery } from "@tanstack/react-query";



const CreateUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("Erro ao buscar usuários");
        console.log(await response.json())
        return response.json();
        
    };

    const ListUsers = () => {
        const {data, isLoading, error} = useQuery({
            queryKey: ["usuarios"],
            queryFn: CreateUser
        });

        if(isLoading) return <p>Carregando...</p>;
        if(error) return <p>Erro: {error.message}</p>

        return (
            <ul>
                {data.map((usuario) => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        )
    }

    export {ListUsers};