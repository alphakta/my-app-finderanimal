import { useState, useEffect, useContext } from 'react';
import './App.css';
import Play from './Components/Play';
import Login from './Components/Login';
import { ThemeContext } from './contexts/theme';
 

function App() {
  const [username] = useState(localStorage.getItem("username") || undefined)
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
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

  const deconnecter = () => {
    localStorage.removeItem('username')
    refreshPage()
  }

  function refreshPage(){ 
    window.location.reload(); 
  }
  if(!word)
    return <p> waiting </p>

  if(username === undefined)
    return(
      <div className="App" style={{backgroundColor: theme.backgroundColor, color: theme.color, position: 'relative' }}>
      <button className="toggleButton" onClick={toggleTheme}> {isDark ? "Sombre" : "Clair"}</button>
      <h1>Animal Finder</h1>
      <p>Trouve l'animal pour gagné des points</p>
        <Login username={username}/>
      </div>
    )

  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor, color: theme.color, position: 'relative' }}>
      <button className="toggleButton" onClick={toggleTheme}> {isDark ? "Sombre" : "Clair"}</button>
      <button className="deconecteSession" onClick={deconnecter}> Se déconnecter </button>
      <h1>Animal Finder</h1>
      <p>Trouve l'animal pour gagné des points</p>
      <Play word={word.word}/>

    </div>
  );
}

export default App;
