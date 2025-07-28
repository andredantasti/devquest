import styled from "styled-components";
import "./App.css";
import { Card } from "./components/Card";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Nomes } from "./components/Nomes";
import { ComputadorFone } from "./components/Produtos";

function App() {

    const tarefas = [
    {id: 1, titulo: "Estudar React"},
    {id: 2, titulo: "Criar componente Header"},
    {id: 3, titulo: "Fazer push no GitHub"},
    {id: 4, titulo: "Finalizar relatório em PDF"},
    {id: 5, titulo: "Revisar styled-components"},
    {id: 6, titulo: "Testar formulário de homicídio"},
    {id: 7, titulo: "Comer alguma coisa 😅"},
    {id: 8, titulo: "Pausar 15 min"}
  ];


  const nomes = ["Ana", "Bruno", "André", "Sarah", "Carlos"]


  const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 129.99, categoria: "Periféricos" },
  { id: 2, nome: "Teclado Mecânico", preco: 249.90, categoria: "Periféricos" },
  { id: 3, nome: "Monitor 24''", preco: 899.99, categoria: "Monitores" },
  { id: 4, nome: "Notebook Dell", preco: 3999.00, categoria: "Computadores" },
  { id: 5, nome: "Headset RGB", preco: 199.50, categoria: "Áudio" },
  { id: 6, nome: "Cadeira Gamer", preco: 1099.00, categoria: "Mobiliário" },
  { id: 7, nome: "Webcam Full HD", preco: 159.99, categoria: "Acessórios" },
  { id: 8, nome: "HD Externo 1TB", preco: 349.90, categoria: "Armazenamento" },
  { id: 9, nome: "SSD NVMe 500GB", preco: 449.00, categoria: "Armazenamento" },
  { id: 10, nome: "Placa de Vídeo RTX 3060", preco: 2399.99, categoria: "Componentes" },
  { id: 11, nome: "Processador Ryzen 5", preco: 1099.00, categoria: "Componentes" },
  { id: 12, nome: "Fonte 650W 80 Plus", preco: 499.99, categoria: "Componentes" },
  { id: 13, nome: "Gabinete Mid Tower", preco: 329.90, categoria: "Componentes" },
  { id: 14, nome: "Impressora Multifuncional", preco: 599.00, categoria: "Periféricos" },
  { id: 15, nome: "Smartphone Android", preco: 2199.90, categoria: "Celulares" },
  { id: 16, nome: "Tablet 10''", preco: 1299.00, categoria: "Tablets" },
  { id: 17, nome: "Kindle Paperwhite", preco: 649.99, categoria: "Leitura Digital" },
  { id: 18, nome: "Apple Watch", preco: 3499.00, categoria: "Wearables" },
  { id: 19, nome: "Roteador Wi-Fi 6", preco: 389.00, categoria: "Rede" },
  { id: 20, nome: "Estabilizador 500VA", preco: 229.90, categoria: "Energia" },
];
  
  return <>
    <TodoList tarefa={tarefas}></TodoList>

    <Card corDeFundo="lightpink">Fim</Card>
  
    <Nomes names={nomes}></Nomes>

    <ComputadorFone produto={produtos}></ComputadorFone>
  </>;
}

export default App;
