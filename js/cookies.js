// Função para verificar se o usuário já consentiu com o uso de cookies
function checkCookieConsent() {
    if (localStorage.getItem('cookieConsent') === 'true') {
        // Se o usuário já consentiu, oculta o banner de consentimento
        document.getElementById('cookieConsent').style.display = 'none';
    }
}

// Função chamada quando o usuário aceita o uso de cookies
function aceitarCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookieConsent').style.display = 'none';
}

// Função chamada quando o usuário rejeita o uso de cookies
function rejeitarCookies() {
    // Aqui você pode adicionar qualquer ação que deseja realizar quando o usuário rejeita cookies
    alert('Por favor, note que alguns recursos podem não funcionar corretamente sem cookies.');
    document.getElementById('cookieConsent').style.display = 'none';
}

// Verifica o consentimento do cookie quando a página é carregada
window.onload = checkCookieConsent;
