let resultado=0;/**variable con scope global*/
/*String, int , bool, undefine,array object, null*/
console.log(suma());
console.log(resultado);
function suma(){
    resultado = 10; 
    return resultado;
}
let nombre = "Luis";
let apellido = "Navas";
let edad = 48;
let llueve = true;
let participantes=[
    "Junior", "Luis", "Ivana", 
    "Martin", "Sheila", "Chenoa", 
    "Marcos","Sebastian"];
for(let a=0; a < participantes.length; a++){
    console.log(participantes[a]);
}
participantes.forEach(part=>console.log(part));

function render(){
    let contenedor = document.getElementById('root');
    participantes.forEach(part=>contenedor.innerHTML+=
        `<div class='card col-4'>
            <img src='...' class='card-img-top' alt='...'>
            <div class='card-body'>
                <h5 class='card-title'>${part}</h5>
                <p class='card-text'></p>
                <a href='#' class='btn 
btn-primary'>Go somewhere</a>
            </div>
        </div>` 
        );
}
render();

let nombre3 = "Gabriel Serrano"
let texto = "me gusta programar"
let saludo = `<h3>Hola, soy: ${nombre3git} y ${texto}</h3>`
let contenedor = document.getElementById("root")
contenedor.innerHTML+=saludo

function nombreCompleto (nombre="",apellido=""){
    return `${nombre}${apellido}`
}
console.log(nombreCompleto("Gabriel ","Serrano"))

