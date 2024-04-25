function updateCounter() {
    var contadorElement = document.getElementById('counter');
    var contador = 0;
    const intervalo = 50;

    function incrementCounter() {
        contadorElement.textContent = "+" + contador;
        contador++;
        if (contador <= 153) {
            setTimeout(incrementCounter, intervalo);
        }
    }

    incrementCounter();
}

window.addEventListener('load', updateCounter);
