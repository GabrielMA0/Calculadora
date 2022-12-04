let resposta = document.querySelector('.fundo-resposta');


function insert(num){
    resposta.innerHTML += num.toLocaleString();
}
function clean(){
    resposta.innerHTML = null;
}
function back(){
    var resultado = document.querySelector('.fundo-resposta').innerHTML;
    resposta.innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.querySelector('.fundo-resposta').innerHTML;
    if(resultado)
            {
                resposta.innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
}