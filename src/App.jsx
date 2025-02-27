import { useState } from "react"
import Guitar from "./components/Guitar"
import { use } from "react"
import { db } from "./data/db"

function App() {
  const [data, setData] = useState(db) /* creamos el useState (objeto) con el nombre data y la funcion de nombre setData que retorna lo que hay en nuestra base de datos db */
  const [cart, setCart] = useState([]) 
  return (
    <>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (  /* nombramos a cada objeto de la coleccioon de datos (guitar) y accedemos.
                                       iteramos sobre data y map nos ayuda a generar un nuevo arreglo*/
            <Guitar /* componente */
              key={guitar.id} /* prop especial que se utiliza en componentes que utilizan .map para iterar */
              guitar={guitar} /* prop de nombre guitar, que accede a nuestro objeto {guitar} */
            />
          ))};

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
