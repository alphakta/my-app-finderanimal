import { useState, useEffect } from 'react';
import './App.css';
import Play from './Components/Play';
 

function App() {
  const [word, setWord] = useState(undefined)
  const [classment, setClassment] = useState(undefined)

  useEffect(() => {
    (async () => {
      const newWord = await getWord()
      setWord(newWord.data)

      const newClassment = await getClassment()
      setClassment(newClassment.data)
    })()
    return () => {}
  }, []);

  const getWord = async () => {
    const dataWord = await fetch('https://animalfinderapi.herokuapp.com/word')
    return await dataWord.json()
  };
  const getClassment = async () => {
    const dataScore = await fetch('https://animalfinderapi.herokuapp.com/score')
    return await dataScore.json()
  };


  console.log(word)
  console.log(classment)
  
  if(!word && !classment)
    return <p> waiting </p>

  return (
    <div className="App">
      <h1>Animal Finder</h1>
      <p>Trouve l'animal pour gagné des points</p>
      <Play word={word.word} classment={classment}/>
    </div>
  );
}

export default App;
