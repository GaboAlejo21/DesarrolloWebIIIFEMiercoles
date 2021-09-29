let alumnos = {
    algo: "Folks",
    nombre: "Gabriel",
    edad: 17,
    mostrar:()=>{
        return `Hola soy ${alumnos.nombre} y tengo ${alumnos.edad}`
    }
}
let saludo =`Hello, ${alumnos.nombre} Folks`
ReactDOM.render(
    <div className="row">
        <div className="col-6 bg-primary text-white text-center p-4">
        {alumnos.mostrar()} {alumnos.algo}
        </div>
    </div>,
    document.getElementById('root')
);