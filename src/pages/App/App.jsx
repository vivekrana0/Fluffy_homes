import './App.css';

import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authpage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/user/register' element={<Authpage />} />
        </Routes>
      </main>
    )
  }
}
