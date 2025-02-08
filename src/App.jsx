import { useState } from 'react';
import './App.css'


function App() {
   const [words,setWords]=useState("");
   const [meaning,setMeaning]=useState("");
   let dict =[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

   const handelChange=(e)=>{
     setWords(e.target.value);
   }
   const handleSearch=()=>{
    const foundWord = dict.find(
      (entry) => entry.word.toLowerCase() === words.toLowerCase()
    );

    if (foundWord) {
      setMeaning(<><p>{foundWord.meaning}</p></>);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
   }
   return (
     <div>
       <h1>Dictionary App</h1>
       <input type="text" placeholder='Search for a word' value={words} onChange={handelChange}/>
       <button onClick={handleSearch}>Search</button>
       <><h3>Definition:</h3><p>{meaning}</p></>
       </div>
   )
}

export default App
