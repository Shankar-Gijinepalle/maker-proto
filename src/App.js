import './App.css';
import NavBar from './NavBar';
import ChildRoutes from './Router/ChildRoutes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ChildRoutes />
    </div>
  );
}

export default App;
