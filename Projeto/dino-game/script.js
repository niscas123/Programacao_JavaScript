const dino = document.querySelector(".dino");
const background = document.querySelector(".fundo-tela");

let isJump = false;
let isGameOver = false;
let position = 0; // posição inicial do dino

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJump) {
            jump();
        }
    } else if(event.keyCode === 38) {
        if(!isJump) {
            jump();
        }
    }
}

function jump() {
    isJump = true;

    let upInterval = setInterval(() => { // cria uma repetição de intervalos
        if(position >= 150) {
            clearInterval(upInterval);

            // descendo
            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJump = false;
                } else {
                    position -= 20; // pega o valor da posição e diminui 20
                    dino.style.bottom = position + "px"; // aplicar estilo no css pelo js
                }
            }, 20);
        } else {
            // subindo
            position += 20; // pega o valor da posição e adiona 20
            dino.style.bottom = position + "px"; // aplicar estilo no css pelo js
        }
    }, 20); // vai executar a cada 20 milissegundos
}

function createCactus() {
    const cactus = document.createElement("div");
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if(isGameOver) return;

    cactus.classList.add("cactus");
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if(cactusPosition < -60) {
            // Saiu da tela
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);