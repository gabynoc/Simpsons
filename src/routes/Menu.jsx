import { useState, useEffect } from 'react'
import '../App.css'


function Quotes () {
  const [user, setUser] = useState();
  const getQuote = () => {
    const promise = fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
          .then((response) => response.json())
          .then((data) => {
            setUser(data[0])
  })
}

useEffect(() => {
  getQuote()
}, []);
if (!user) return <div>Loading...</div>;
   return(
    <div>
      <article key={user.character} className="quotes">
        <div className="quote-image">
          <div className="quotes1">{user.quote}</div>
          <div className="image1"><img className="character-quote" alt={user.character} src={user.image} /></div>
        </div>
      <strong className="name">{user.character}</strong>
      </article>
      <button onClick={getQuote}> Show me more </button>
    </div>
   )
}
export function Menu () {
  return (
    <>
      <Quotes/> 
    </> 
  )
}
