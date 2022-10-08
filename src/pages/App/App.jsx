import './App.css';

import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../../components/Navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <NavbarComponent/>
      </main>
    )
  }
}
