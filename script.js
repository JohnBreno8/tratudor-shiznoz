// Função para aplicar as regras de tradução
function traduzirTexto() {
    let texto = document.getElementById("inputText").value;

    // Substituir os artigos
    texto = texto.replace(/\bO\b/g, "ri'v")
                 .replace(/\bA\b/g, "gą'n")
                 .replace(/\bOS\b/g, "ri'nz")
                 .replace(/\bAS\b/g, "gą'nz");

    // Substituir os verbos
    texto = texto.replace(/\bé\b/g, "gä'n")
                 .replace(/\bhá\b/g, "ki'm");

    // Substituir as letras específicas (J, B, L, P)
    texto = texto.replace(/\bJ/g, "Y")
                 .replace(/\bB/g, "O")
                 .replace(/\bL/g, "R")
                 .replace(/\bP/g, "W")
                 .replace(/\bj/g, "Y")
                 .replace(/\bb/g, "O")
                 .replace(/\bl/g, "R")
                 .replace(/\bp/g, "W");

    // Colocar Z antes de N (somente no meio da palavra)
    texto = texto.replace(/(\w)N(\w)/g, "$1Z$2");

    // Exibir o texto traduzido com animação de fade
    let translatedTextDiv = document.getElementById("translatedText");
    translatedTextDiv.textContent = texto;
    translatedTextDiv.style.animation = "none";  // Reset animation
    translatedTextDiv.offsetHeight;  // Trigger reflow to restart animation
    translatedTextDiv.style.animation = "fadeInText 1s ease-in-out forwards";
}