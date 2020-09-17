import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = { count: 0 };
		this.counter = this.counter.bind(this);
	}

	counter(e) {
		console.log(e);
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div className="App">
				<div>Counter: {this.state.count}</div>
				<button onClick={this.counter}>add one</button>
			</div>
		);
	}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
