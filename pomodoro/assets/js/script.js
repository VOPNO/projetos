function atualizarRelogio() {
    const relogioElement = document.getElementById('relogio');
    const dataAtual = new Date();
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
    const horaFormatada = `${minutos}:${segundos}`;
    relogioElement.textContent = horaFormatada;
}


//setInterval(atualizarRelogio, 1000);
