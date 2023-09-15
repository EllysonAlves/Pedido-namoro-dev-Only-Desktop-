document.getElementById("btn-sim").addEventListener("click", alerta);
const nao = document.getElementById("btn-nao");

var largura = window.innerWidth;
    console.log(largura)
    if (largura < 500) 
        nao.addEventListener("click", alertaNao)
    else{
        nao.addEventListener("mouseenter", entrar);
    }

let countNAO = 0;

function alertaNao(){
    countNAO++
    if(countNAO == 1){
        nao.style.opacity="0.5";
        alert("ERRO ao contabilizar a resposta , tente novamente!");
        console.log(countNAO)
    }
    if(countNAO == 2){
        nao.style.opacity="0.3";
        alert("ERRO ao contabilizar a resposta , tente novamente!");
        console.log(countNAO)
    }
    if(countNAO == 3){
        nao.style.opacity="0";
        alert("ERRO ao contabilizar a resposta , tente novamente!");
        console.log(countNAO)
    }
}

function alerta(){
    alert("HUMMM, ENTÃO VOCE ESTÀ INTERESSADA !");
}

let estado = -1;

function entrar(){
    estado++
    if (estado == 0){
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

