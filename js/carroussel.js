// Inicializa a variável que controla o índice do slide atual
var slideIndex = 1;

// Exibe o slide inicial ao carregar a página
showSlides(slideIndex);

// Função para avançar ou retroceder os slides
function plusSlides(n) {
  // Atualiza o índice do slide e exibe o novo slide
    showSlides(slideIndex += n);
}

// Função para mostrar um slide específico ao clicar nos pontos indicadores
function currentSlide(n) {
  // Define o índice do slide e exibe o slide correspondente
    showSlides(slideIndex = n);
}

// Função para exibir os slides
function showSlides(n) {
    var i;
  // Obtém todos os slides e os pontos indicadores
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

  // Verifica se o índice do slide está além dos limites
    if (n > slides.length) {
    slideIndex = 1; // Volta para o primeiro slide
    }
    if (n < 1) {
    slideIndex = slides.length; // Vai para o último slide
    }

  // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

  // Remove a classe "active" de todos os pontos indicadores
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }

  // Exibe o slide atual e marca o ponto indicador correspondente como ativo
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

  // Define o intervalo de tempo para a transição automática dos slides
    setTimeout(function() {
    plusSlides(1); // Avança para o próximo slide
  }, 5000); // Tempo de 5 segundos entre os slides
}
