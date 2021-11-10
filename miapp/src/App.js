import React , {Component} from 'react'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newTask:"Acá va a ir el estado cuando lo cambiemos!",
      numero:0,
      tasks:["Avisar que vamos a salir"]
    };
    this.cont=1
    this.handleTaskChange=this.handleTaskChange.bind(this)
  }
  handleTaskChange(e){
    this.cont++
    this.setState({newTask:e.target.value,nunero:this.cont})
  }
  
  agregar(event){
    event.preventDefault()
    //console.log("hola")
    let newT = this.state.tasks
    newT.push(this.state.newTask)
    this.setState({newTask:"",task:newT})
  }

  render(){
    return (
    <div className="container bg-dark">
      <div className="row">
      <h1 className="text-center text-white">Hola Mundo!</h1>
      <span className="text-white">{this.cont}</span>
        <div className="d-flex justify-content-center">
          <form onSubmit={this.agregar()}>
          <input onChange={this.handleTaskChange} 
          type="text" className="w-25"></input>
          <input type="submit" value="agregar"></input>
          </form>
        </div>
        <h2 className="text-white text-center">{this.state.newTask}</h2>
        <ul>{
          this.state.tasks.map((t,i)=><li className="text-white" key={i}>{t}</li>)  
        }</ul>
      </div>
    </div>
  );
  }
}
export default App;
