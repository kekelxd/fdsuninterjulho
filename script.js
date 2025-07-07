// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    // Captura os elementos HTML
    const botao = document.getElementById("mensagemBtn");
    const areaMensagem = document.getElementById("mensagem");

    // Adiciona o evento de clique no botão
    botao.addEventListener("click", function () {
        areaMensagem.textContent = "Você não é derrotado quando perde. É derrotado quando desiste.";
        areaMensagem.style.marginTop = "15px";
        areaMensagem.style.fontWeight = "bold";
        areaMensagem.style.color = "#2a4d69";
    });
});
