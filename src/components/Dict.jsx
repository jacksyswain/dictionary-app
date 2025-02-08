import useState from 'react'

function Dict() {
  const [word,setWord]=useState("");
  const handelChange=(e)=>{
    setWord(e.target.value);
  }
  const handleSearch=()=>{

  }
  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" placeholder='Search for a word' value={word} onChange={handelChange}/>
      <button onChange={handleSearch}>Search</button>

    </div>
  )
}

export default Dict
