import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import { useState } from 'react';

function App() {
  const [test, setTest] = useState(3)
  
  const bonusList = [
    { name: "Bonus easy", price: 10, bonus: 2 },
    { name: "bonus medium", price: 50, bonus: 3 },
    { name: "bonus hard", price: 100, bonus: 5 },
  ];
  return (
    <>
    <Hello bonusList={bonusList}/>
    </>
  );
}

export default App;
