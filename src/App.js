import { useState, useEffect } from 'react';
import './App.css';
import Play from './Components/Play';
 

function App() {
  const [word, setWord] = useState(undefined)
  const [score, setScore] = useState(undefined)

  useEffect(() => {
    (async () => {
      const newWord = await getWord()
      setWord(newWord.data)
      const newScore = await getScore()
      setScore(newScore.data)
    })()
    return () => {}
  }, []);

  const getWord = async () => {
    const dataWord = await fetch('https://animalfinderapi.herokuapp.com/word')
    return await dataWord.json()
  };
  const getScore = async () => {
    const dataScore = await fetch('https://animalfinderapi.herokuapp.com/score')
    return await dataScore.json()
  };
  console.log(word)
  console.log(score)

  if(!word && !score)
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
