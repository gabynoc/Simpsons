import { Link } from "react-router-dom"
export function Home() { 
    return (
        <>
          <article className="Intro">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" alt="Logo" className="Logo" />
            <img src= "src/assets/img/simpsons.png" alt ="Simpsons" className="Simpsons" />
            <Link to= "/Quotes" > 
                <button value= "A">Quotes</button>
            </Link>
          </article>
        </>
    )
}