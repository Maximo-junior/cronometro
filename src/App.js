import { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "COMEÇAR",
    };
    this.timer = null;
    this.comecar = this.comecar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  comecar() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "COMEÇAR";
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = "PAUSAR";
    }
    this.setState(state);
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = "COMEÇAR";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h1 className="titulo">Cronômetro</h1>
        <img src={require("./assets/cronometro.png")} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div>
          <a className="botao" onClick={this.comecar}>
            {this.state.botao}
          </a>
          <a className="botao" onClick={this.limpar}>
            LIMPAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
