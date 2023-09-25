// Função para processar o cadastro (exemplo simples)
function cadastrar() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const newPassword = document.getElementById("new-password").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const occupation = document.getElementById("occupation").value;

  // Aqui você pode fazer o processamento do cadastro, por exemplo, enviar os dados para um servidor
  // Neste exemplo, apenas exibimos os dados cadastrados
  const message = `
      Cadastro bem-sucedido!
      Nome: ${fullname}
      Email: ${email}
      Endereço: ${address}
      Telefone: ${phone}
      Profissão: ${occupation}
  `;
  alert(message);
}

// Adicione um ouvinte de evento ao botão de cadastro
document.getElementById("signup-button").addEventListener("click", cadastrar);