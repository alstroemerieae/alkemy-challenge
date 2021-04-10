import './App.css';
import Header from './components/Header'
import Inputs from './components/Inputs'
import History from './components/History'

import { OperationContextProvider } from './context/OperationContext'

function App() {
  return (
    <div className="App">
      <OperationContextProvider>
        <Header />
        <Inputs />
        <History />
      </OperationContextProvider>
    </div>
  );
}

export default App;
