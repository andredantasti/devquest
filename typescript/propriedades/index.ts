type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}

const newCostumer: Customer = {
    firstName: "Andre",
    age: 32
}

console.log(newCostumer);