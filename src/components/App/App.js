import './App.css';
import Input from '../Input/Input'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='text-header'>
          unlucky fools
          <span> a no-frills fate generator for people just doing their best </span>
        </div>
        
        <Input />

      </header>
    </div>
  );
}

export default App;