type Customer = {
    name: string;
    age: number;
}

interface InterfaceCustomer {
    nome: string;
    age: number;
}

interface IAddress {
    street: string;
}

interface ICostumerProfile extends Customer, IAddress{}

const newProfile: ICostumerProfile = {
    name: "Andre",
    age: 39,
    street: "Rua 36"
}