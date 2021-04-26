import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OperationContextProvider } from './context/OperationContext'

function App() {
  return (
    <Router>
      <OperationContextProvider>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </OperationContextProvider>
    </Router>
  );
}

export default App;
