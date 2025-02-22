import { useState} from "react"
import Guitar from "./components/Guitar"
import { use } from "react"
import { db } from "./data/db"

function App() {
  const [data, setData] = useState(db)
  return (
    <>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(() => (
            <Guitar/>
          ))}
        </div>
      </main>


      <footer class="bg-dark mt-5 py-5">
        <div class="container-xl">
          <p class="text-white text-center fs-4 mt-4 m-md-0">Guitar Store - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
