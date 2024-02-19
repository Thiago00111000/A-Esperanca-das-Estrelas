const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-Conteudos");

for(let i=0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoFuturo1 = new Date("2025-01-01T00:00:00");
const tempoFuturo2 = new Date("2030-01-01T00:00:00");
const tempoFuturo3 = new Date("3000-01-01T00:00:00");
const tempoFuturo4 = Infinity;
const tempos = [tempoFuturo1,tempoFuturo2,tempoFuturo3]


function calculatempo(tempoFuturo){
    let tempoPresente = new Date();
    let tempoFinal = tempoFuturo - tempoPresente;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    //Mostra a sobra das divisões anteriores//
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias, horas, minutos, segundos];
    } else{
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculatempo (tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculatempo (tempos[i])[1];
        document.getElementById("minutos"+i).textContent = calculatempo (tempos[i])[2];
        document.getElementById("segundos"+i).textContent = calculatempo (tempos[i])[3];
    }
}

function capacitordeFluxo(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

capacitordeFluxo();