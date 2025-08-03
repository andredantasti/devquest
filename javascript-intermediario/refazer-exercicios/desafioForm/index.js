const nome = document.getElementById("nome");

const criarErro = (input, mensagem) => {
  removerErro(input);
  const erro = document.createElement("p");
  erro.classList.add("invalido");
  erro.textContent = mensagem;
  input.insertAdjacentElement("afterend", erro);
};

const removerErro = (input) => {
  const proximo = input.nextElementSibling;
  if (proximo && proximo.classList.contains("invalido")) {
    proximo.remove();
  }
};

const validarNome = () => {
  if (nome.value.trim() === "") {
    nome.classList.add("invalido");
    nome.classList.remove("valido");
    criarErro(nome, "Campo Obrigatório!");
    return false;
  } else {
    nome.classList.remove("invalido");
    nome.classList.add("valido");
    removerErro(nome);
    return true;
  }
};

const emailInput = document.getElementById("email");

const validarEmail = () => {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailInput.classList.add("invalido");
    emailInput.classList.remove("valido");
    criarErro(emailInput, "Campo Obrigatório");
    return false;
  } else if (!regex.test(email)) {
    emailInput.classList.add("invalido");
    emailInput.classList.remove("valido");
    criarErro(emailInput, "Formato inválido");
    return false;
  } else {
    emailInput.classList.remove("invalido");
    emailInput.classList.add("valido");
    removerErro(emailInput);
    return true;
  }
};

const telefoneInput = document.getElementById("telefone");

const validarTelefone = () => {
  
  const telefone = telefoneInput.value.trim();
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
 
  if (telefone === "") {
    telefoneInput.classList.add("invalido");
    telefoneInput.classList.remove("valido");
    criarErro(telefoneInput, "Campo Obrigatório!");
    return false;
  } else if (!regex.test(telefone)) {
    telefoneInput.classList.add("invalido");
    telefoneInput.classList.remove("valido");
    criarErro(telefoneInput, "Formato Inválido!");
    return false;
  } else {
    telefoneInput.classList.remove("invalido");
    telefoneInput.classList.add("valido");
    removerErro(telefoneInput);
    return true;
  }
}

  
const mensagemInput = document.getElementById("mensagem");

const validarMensagem = () => {
  
  const mensagem = mensagemInput.value.trim();

  if (mensagem === "" || mensagem.length < 10) {
    mensagemInput.classList.add("invalido");
    mensagemInput.classList.remove("valido");
    criarErro(mensagemInput, "Campo Obrigatório! (mín. 10 caracteres)");
    return false;
  } else {
    mensagemInput.classList.remove("invalido");
    mensagemInput.classList.add("valido");
    removerErro(mensagemInput);
    return true;
  }
};

nome.addEventListener("change", validarNome);
emailInput.addEventListener("change", validarEmail);
telefoneInput.addEventListener("change", validarTelefone);
mensagemInput.addEventListener("change", validarMensagem);

const botaoEnviar = document.getElementById("btn");

botaoEnviar.addEventListener("click", (event) => {
  event.preventDefault();

const nomeValido = validarNome();
const emailValido = validarEmail();
const telefoneValido = validarTelefone();
const mensagemValida = validarMensagem();

if(nomeValido && emailValido && telefoneValido && mensagemValida){
  const dados = {
      nome: nome.value.trim(),
      email: emailInput.value.trim(),
      telefone: telefoneInput.value.trim(),
      mensagem: mensagemInput.value.trim()}

      console.log("Dados encaminhados:", dados);
  alert("Formulário enviado com sucesso!");
} else {
  alert("Preencha todos os campos corretamente!");
}


});
