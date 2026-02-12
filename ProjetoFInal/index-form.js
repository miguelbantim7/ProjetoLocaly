function validarEmail() {
    const emailInput = document.getElementById('email');
    const mensagemErro = document.getElementById('mensagemErro');
    const btnEnviar = document.getElementById('btnEnviar');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValido = false;

    if (email === "") {
   
        mensagemErro.textContent = "Digite seu e-mail para continuar.";
        mensagemErro.className = 'mensagem-status'; 
        isValido = false;

    } else if (emailRegex.test(email)) {
        mensagemErro.textContent = "E-mail válido!";
        mensagemErro.className = 'mensagem-status sucesso'; 
        isValido = true;

    } else {
        mensagemErro.textContent = "Formato de e-mail inválido.";
        mensagemErro.className = 'mensagem-status erro';
        isValido = false;
    }
    btnEnviar.disabled = !isValido;
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (!document.getElementById('btn-primary').disabled) {
        alert('Cadastro enviado com sucesso para: ' + document.getElementById('email').value);
        
    } else {
        alert('Por favor, corrija o e-mail antes de enviar.');
    }
});

validarEmail();