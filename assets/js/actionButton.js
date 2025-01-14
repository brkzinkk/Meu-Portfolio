// Footer //

// Inicializa o EmailJS com a chave pública
emailjs.init("4dyqyUf_2e40aYOTE"); // Substitua pelo seu Public API Key

// Evitar o conflito de declaração de 'form'
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form'); // Selecione o formulário

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio tradicional do formulário

        // Captura os valores dos campos
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('mensagem').value;

        // Envia os dados do formulário para o EmailJS
        emailjs.send("service_0h2dpln", "template_act9ikf", {
            name: name,
            phone: phone,
            email: email,
            message: message
        })
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
            form.reset(); // Limpa o formulário após envio bem-sucedido
        }, function(error) {
            alert("Erro ao enviar mensagem. Tente novamente.");
            console.error(error); // Para debugar qualquer erro
        });
    });
});