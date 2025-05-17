document.addEventListener("DOMContentLoaded", function() {
    const ellie = document.getElementById("ellie");
    const dina = document.getElementById("dina");
    const popup = document.getElementById("popup");
    const close = document.getElementById("close");

    // Função para abrir o pop-up
    function openPopup() {
        popup.style.display = "block";
    }

    // Adiciona eventos de clique nas imagens
    ellie.addEventListener("click", openPopup);
    dina.addEventListener("click", openPopup);

    // Fecha o pop-up
    close.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Fecha o pop-up ao clicar fora do conteúdo
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
