import Form from './components/form';
import './App.css';
import useToggle from './hooks/useToggle';

function App() {
  const { value, toggleValue } = useToggle();
  return (
    <div className="container">
      { value === false 
      ?  <button onClick={toggleValue}>Cadastre-se agora!</button> 
      : <Form toggle={toggleValue} />}
      
    </div>
  );
}

export default App;
