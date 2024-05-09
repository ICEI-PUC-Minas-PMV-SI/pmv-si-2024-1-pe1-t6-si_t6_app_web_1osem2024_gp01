function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';
    confirmPasswordError.innerHTML = '';
    let isValid = true;
    if (name.trim() === '') {
        nameError.innerHTML = 'Por favor, digite seu nome';
        isValid = false;
    }
    if (email.trim() === '') {
        emailError.innerHTML = 'Por favor, digite seu email';
        isValid = false;
    }
    if (password.trim() === '') {
        passwordError.innerHTML = 'Por favor, digite sua senha';
        isValid = false;
    }
    if (confirmPassword.trim() === '') {
        confirmPasswordError.innerHTML = 'Por favor, repita sua senha';
        isValid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = 'As senhas não coincidem';
        isValid = false;
    }
    if (isValid) {
        console.log('Cadastro válido. Salvando dados...');
        // Verifica se já existem dados de usuários no localStorage
        let usersData = JSON.parse(localStorage.getItem('users')) || {};

        // Cria um objeto com os dados do usuário
        let userData = {
            name: name,
            email: email,
            password: password
        };

        // Adiciona os dados do novo usuário ao objeto de usuários
        usersData[email] = userData;

        // Atualiza os dados de usuários no localStorage
        localStorage.setItem('users', JSON.stringify(usersData));

        // Define o usuário atualmente logado no localStorage
        localStorage.setItem('currentUser', JSON.stringify(userData)); // Salvando os dados completos do usuário como currentUser

        console.log('Dados salvos:', userData);

        // Redireciona para a página de login
        console.log('Redirecionando para a página de login...');
        window.location.href = 'login.html';
    } else {
        console.log('Formulário inválido. Corrija os erros.');
    }
    return isValid;
}
