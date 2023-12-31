// Defina o tempo de espera em milissegundos
var tempoDeEspera = 1000; // 1 segundo

// Função para redirecionar para outra página
function redirecionar() {
    window.location.href = "index2.html";
}

// Função para iniciar a animação e o redirecionamento
function iniciarAnimacao() {
    setTimeout(redirecionar, tempoDeEspera);
}

// Chame a função para iniciar a animação quando a página for carregada
window.onload = iniciarAnimacao;
