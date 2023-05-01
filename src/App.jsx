import { Component } from "react";
import "./App.css";

class App extends Component {

  constructor() {
    //Super calls the parent constructor
    super();

    this.state = {
      list: ["ready", "set", "go"],
      text: "",
    }

    //Make sure that the method is bound to this class
    //Aka, keep Texas from seceding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Learning React</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="listInput" id="listInput"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={item+index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
