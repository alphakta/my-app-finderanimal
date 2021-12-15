import { useState, useEffect } from 'react';
import './App.css';
import Play from './Components/Play';
 

function App() {
  const [word, setWord] = useState(undefined)

  useEffect(() => {
    (async () => {
      const newWord = await getWord()
      setWord(newWord.data)

    })()
    return () => {}
  }, []);

  const getWord = async () => {
    const dataWord = await fetch('https://animalfinderapi.herokuapp.com/word')
    return await dataWord.json()
  };

  if(!word)
    return <p> waiting </p>

  return (
    <div className="App">
      <h1>Animal Finder</h1>
      <p>Trouve l'animal pour gagné des points</p>
      <Play word={word.word}/>
    </div>
  );
}

export default App;
