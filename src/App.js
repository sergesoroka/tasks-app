import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
