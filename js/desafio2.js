let variable = document.getElementById("root")
const nombreCompleto=(nombre ="",apellido="")=>{
    nc=`<h2>Hola, mi nombre es ${nombre} ${apellido}</h2>`
    return nc
}
variable.innerHTML+=nombreCompleto("Gabriel ", "Serrano")
variable.innerHTML+=nombreCompleto("Gabriel")
