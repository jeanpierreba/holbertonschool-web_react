import logo from './holberton_logo.png';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
		<label htmlFor='email'>Email: </label>
		<input type="email" name="email" id="email"></input>
		<label htmlFor='password' id="password">Password: </label>
		<input type="password" name="password"></input>
		<button>OK</button>
      </body>
      <footer className="App-footer">
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </footer>
    </div>
  );
}

export default App;
