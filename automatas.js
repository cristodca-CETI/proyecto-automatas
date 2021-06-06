const TIEMPO_VERDE = 10000
const TIEMPO_AMARILLO = 6000
const TIEMPO_ROJO = 15000
const RESET_ENABLE = 60000

var enable = 0 // Variable de control
var l = document.getElementById("timer")

// Función de inicio
function start() {
    if (enable === 0) {
        enable = 1

        timer(TIEMPO_VERDE / 1000)
        setTimeout(() => {
            timer(TIEMPO_AMARILLO / 1000)
            document.getElementById("auto").classList.add("coche-detenido")
            encenderApagar("verde")
            encenderApagar("amarillo")
            setTimeout(() => {
                timer(TIEMPO_ROJO / 1000)
                if(document.getElementById("persona").classList.contains("persona-stop")) {
                    document.getElementById("persona").classList.add("persona-movimiento2")
                } else {
                    document.getElementById("persona").classList.add("persona-movimiento")
                }
                setTimeout(() => {
                    document.getElementById("persona").classList.toggle("persona-stop")
                }, 5000)
                encenderApagar("amarillo")
                encenderApagar("rojo")
                setTimeout(() => {
                    timer(60)
                    if(document.getElementById("persona").classList.contains("persona-stop")) {
                        document.getElementById("persona").classList.remove("persona-movimiento2")
                    } else {
                        document.getElementById("persona").classList.remove("persona-movimiento")
                    }
                    document.getElementById("auto").classList.remove("coche-detenido")
                    encenderApagar("rojo")
                    encenderApagar("verde")
                    setTimeout(() => {
                        enable = 0
                    }, RESET_ENABLE)
                }, TIEMPO_ROJO)
            }, TIEMPO_AMARILLO)
        }, TIEMPO_VERDE)
    } else {
        alert("Tienes que esperar")
    }
}

// Función para encender o apagar uno de los focos del semáforo
function encenderApagar(item) {
    if (item === "verde") {
        document.getElementById("verde").classList.toggle("opaco")
    } else if (item === "rojo") {
        document.getElementById("rojo").classList.toggle("opaco")
    } else { // En caso de que sea amarillo
        document.getElementById("amarillo").classList.toggle("opaco")
    }
}

function timer(n) {
    window.setInterval(function(){
        n--;
        if (n >= 0) {
            l.innerHTML = n;
        }
    },1000);
}