import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/main';
import About from './components/about/About';
import Advice from './components/advice/Advice';
import Navbar from './components/Navigation/Navbar';
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/advice" component={Advice} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
