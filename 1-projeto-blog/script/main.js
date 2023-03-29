let num;

let aleatorio = Math.random();
num = 1 + Math.trunc(99 * aleatorio);

let curtida1 = document.getElementById("card1").innerHTML = num 

let curtida2 = document.getElementById("card2").innerHTML = Math.trunc(num * Math.random())

let curtida3 = document.getElementById("card3").innerHTML = Math.trunc(num * Math.random())

let curtida4 = document.getElementById("card4").innerHTML = Math.trunc(num * Math.random())

function curtir1(){
    let elemento = document.getElementById("core1");

    if (elemento.classList.contains("bi-heart")) {
        elemento.classList.remove("bi-heart");
        elemento.classList.add("bi-heart-fill");
        document.getElementById("card1").innerHTML = curtida1 + 1;
    } else {
        elemento.classList.remove("bi-heart-fill");
        elemento.classList.add("bi-heart");
        document.getElementById("card1").innerHTML = curtida1;
    }
}

function curtir2(){
    let elemento = document.getElementById("core2");

    if (elemento.classList.contains("bi-heart")) {
        elemento.classList.remove("bi-heart");
        elemento.classList.add("bi-heart-fill");
        document.getElementById("card2").innerHTML = curtida2 + 1;
    } else {
        elemento.classList.remove("bi-heart-fill");
        elemento.classList.add("bi-heart");
        document.getElementById("card2").innerHTML = curtida2;
    }
}

function curtir3(){
    let elemento = document.getElementById("core3");

    if (elemento.classList.contains("bi-heart")) {
        elemento.classList.remove("bi-heart");
        elemento.classList.add("bi-heart-fill");
        document.getElementById("card3").innerHTML = curtida3 + 1;
    } else {
        elemento.classList.remove("bi-heart-fill");
        elemento.classList.add("bi-heart");
        document.getElementById("card3").innerHTML = curtida3;
    }
}

function curtir4(){
    let elemento = document.getElementById("core4");

    if (elemento.classList.contains("bi-heart")) {
        elemento.classList.remove("bi-heart");
        elemento.classList.add("bi-heart-fill");
        document.getElementById("card4").innerHTML = curtida4 + 1;
    } else {
        elemento.classList.remove("bi-heart-fill");
        elemento.classList.add("bi-heart");
        document.getElementById("card4").innerHTML = curtida4;
    }
}