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

    // Substituir as letras específicas (J, B, L, P, F)
    texto = texto.replace(/J/g, "Y").replace(/j/g, "Y")
                 .replace(/B/g, "O").replace(/b/g, "O")
                 .replace(/L/g, "R").replace(/l/g, "R")
                 .replace(/P/g, "W").replace(/p/g, "W")
                 .replace(/F/g, "ɿ").replace(/f/g, "ɿ");

    // Substituir "N" por "ƞ"
    texto = texto.replace(/N/g, "ƞ").replace(/n/g, "ƞ");

    // Adicionar "Z" antes de "ƞ" no meio das palavras
    texto = texto.replace(/(\w)ƞ(\w)/g, "$1Zƞ$2");


    
    // Substituir sufixos terminados em "de" por "d"
    texto = texto.replace(/\b(\w+)de\b/g, "$1d");

    // Substituir prefixos e partes de palavras específicas
    texto = texto.replace(/tra/g, "Ŧ")
                 .replace(/tro/g, "Ŧ")
                 .replace(/tru/g, "Ŧ")
                 .replace(/tria/g, "Ⱦ")
                 .replace(/tre/g, "Ⱦ")
                 .replace(/tri/g, "Ⱦ");

    // Exibir o texto traduzido com animação de fade
    let translatedTextDiv = document.getElementById("translatedText");
    translatedTextDiv.textContent = texto;
    translatedTextDiv.style.animation = "none";  // Reset animation
    translatedTextDiv.offsetHeight;  // Trigger reflow to restart animation
    translatedTextDiv.style.animation = "fadeInText 1s ease-in-out forwards";
}
