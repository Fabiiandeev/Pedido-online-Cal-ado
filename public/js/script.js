document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('mainContainer').style.display = 'block';
            } else {
                alert('Login falhou');
            }
        }).catch(error => console.error('Erro:', error));
});

function mostrarFormulario(formulario) {
    document.querySelectorAll('.formulario').forEach(form => form.style.display = 'none');
    document.getElementById(`form${capitalizeFirstLetter(formulario)}`).style.display = 'block';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Funções para enviar dados de formulário para o backend seguem a mesma estrutura...
