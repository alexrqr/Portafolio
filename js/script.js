//MENU
/*let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
}) */


function saludo(){
    swal("Hey, I'm Alexander Romero", "Welcome to my Portfolio", "success");
    /*
    swal("Hey, I'm Alexander Romero", "Bienvenid@ a mi portafolio", "success",{
        buttons:["ok"]
        //buttons:["ok","No"]
    });
    */
}

function aboutMore(){
    swal("Poseo conocimientos sobre Backend, Full stack y metodologías ágiles.",
        "Soy una persona apasionada por mi carrera, poseo la capacidad de trabajo en equipo, responsable y perseverante.",
        "success");
}

function mensajeCorreo(){
    alert("Gracias por digitar tu correo");
}
function leerMas(){
    swal("Poseo conocimiento básico sobre Linux (Centos), windows nivel intermedio");
}