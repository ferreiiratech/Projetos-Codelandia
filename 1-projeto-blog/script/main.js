let num;

//gera um número de curtida aleatório
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random(); //gera um valor aleatorio entr 0 e 1
num = min + Math.trunc(dif * aleatorio);

//atribui um valor aleatório de like para cada card
let curtida1 = document.getElementById("card1").innerHTML = num 

let curtida2 = document.getElementById("card2").innerHTML = Math.trunc(num * Math.random())

let curtida3 = document.getElementById("card3").innerHTML = Math.trunc(num * Math.random())

let curtida4 = document.getElementById("card4").innerHTML = Math.trunc(num * Math.random())


//funções
function curtir1(){
    let cont=curtida1 + 1;

    let elemento = document.getElementById("core1")

    elemento.classList.remove("bi-heart")
    elemento.classList.add("bi-heart-fill")

    document.getElementById("card1").innerHTML = cont; 
}

function curtir2(){
    let cont=curtida2 + 1;

    let elemento = document.getElementById("core2")

    elemento.classList.remove("bi-heart")
    elemento.classList.add("bi-heart-fill")

    document.getElementById("card2").innerHTML = cont; 
}

function curtir3(){
    let cont=curtida3 + 1;

    let elemento = document.getElementById("core3")

    elemento.classList.remove("bi-heart")
    elemento.classList.add("bi-heart-fill")

    document.getElementById("card3").innerHTML = cont; 
}

function curtir4(){
    let cont=curtida4 + 1;

    let elemento = document.getElementById("core4")

    elemento.classList.remove("bi-heart")
    elemento.classList.add("bi-heart-fill")

    document.getElementById("card4").innerHTML = cont; 
}