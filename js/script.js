let resposta = document.getElementById('fundo-resposta');

function inset(num){
    let conteudo = resposta.innerText;
    let resultado = conteudo.replace("0", "");
    
 console.log(conteudo.length)
    if(conteudo.length === 1){
        resposta.innerHTML = resultado + num;    
    } else{
        resposta.innerHTML += num;
    }

}
function operator(op){
    resposta.innerHTML += op;
}
function clean(){
    resposta.innerHTML = 0;
}
function back(){
    let resultado = document.querySelector('#fundo-resposta').innerHTML;
    resposta.innerHTML = resultado.substring(0, resultado.length -1);

    // COLOCANDO O NÚMERO 0 APÓS APAGAR TUDO!

    if(resultado.length === 1){
        resposta.innerHTML = 0;
    }
}
function calcular(){
    let resultado = document.querySelector('#fundo-resposta').innerHTML;
    if(resultado)
            {
                resposta.innerHTML = eval(resultado);
            }
}

// EVENTOS PARA ACIONAR OS BOTÕES ATRAVÉS DE TECLAS ESPECÍFICAS

document.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
        let keyenter = document.querySelector('.btn-resultado');
        keyenter.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '0'){
        let key0 = document.querySelector('.btn-0');
        key0.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '1'){
        let key1 = document.querySelector('.btn-1');
        key1.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '2'){
        let key2 = document.querySelector('.btn-2');
        key2.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '3'){
        let key3 = document.querySelector('.btn-3');
        key3.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '4'){
        let key4 = document.querySelector('.btn-4');
        key4.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '5'){
        let key5 = document.querySelector('.btn-5');
        key5.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '6'){
        let key6 = document.querySelector('.btn-6');
        key6.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '7'){
        let key7 = document.querySelector('.btn-7');
        key7.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '8'){
        let key8 = document.querySelector('.btn-8');
        key8.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '9'){
        let key9 = document.querySelector('.btn-9');
        key9.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '.'){
        let keyponto = document.querySelector('.btn-ponto');
        keyponto.click();
    }
})
document.addEventListener("keydown", function(e){
    if (e.key === 'Backspace' || e.key === 'Delete'){
        let keyback = document.querySelector('#btn-backspace');
        keyback.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === 'c' || e.key === "C"){
        let keyc = document.querySelector('.btn-c');
        keyc.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '+'){
        let keysoma = document.querySelector('.btn-soma');
        keysoma.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '-'){
        let keysub = document.querySelector('.btn-sub');
        keysub.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '*' || e.key === 'x' || e.key === 'X'){
        let keyvezes = document.querySelector('.btn-vezes');
        keyvezes.click();
    }
})
document.addEventListener("keypress", function(e){
    if (e.key === '/'){
        let keydividir = document.querySelector('.btn-dividir');
        keydividir.click();
    }
})