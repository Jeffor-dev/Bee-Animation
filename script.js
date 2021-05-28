function abrir(){

    olhos = document.getElementById('caixa');
    olhos.style.display = 'none'
    

}

function fechar(){

    olhos = document.getElementById('caixa');
    olhos.style.display = "";

}

function piscar_olhos(){

    setInterval(abrir, 900);
    setInterval(fechar, 1500);
    
}

piscar_olhos();