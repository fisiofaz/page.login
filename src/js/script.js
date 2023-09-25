// Função para verificar o login (apenas um exemplo simples)
function verificarLogin() {
  const username = document.getElementById("email-input").value;
  const password = document.getElementById("password").value;

  // Verifique as credenciais aqui (por exemplo, comparando com valores fixos)
  if (username === "email-input" && password === "senha") {
      alert("Login bem-sucedido!");
  } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
  }
}

// Função para lidar com o link de cadastro
function irParaCadastro() {
  alert("Redirecionar para a página de cadastro aqui.");
}

// Adicione um ouvinte de evento ao botão de login
document.getElementById("login-button").addEventListener("click", verificarLogin);
document.getElementById("signup-link").addEventListener("click", irParaCadastro);