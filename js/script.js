const menu = document.querySelector("#btn");
menu.addEventListener('click',()=>{
    let barra1 = document.querySelector(".span1");
    let barra2 = document.querySelector(".span2");
    let barra3 = document.querySelector(".span3");
    let capa = document.querySelector(".seccionUno");
    barra1.classList.toggle("span1Active");
    barra2.classList.toggle("span2Active");
    barra3.classList.toggle("span3Active");
    capa.classList.toggle("seccionUnoActive")
})
//++$+$+$+
