import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { RoutesConfig } from './routes';
// import './App.css';

function App() {
   return (
      <Router>
         <Routes>{RoutesConfig}</Routes>
      </Router>
   );
}

export default App;
