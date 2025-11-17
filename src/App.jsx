// import { useState } from 'react'
// import FormModal from './components/FormModal';
import { PokeApi } from './components/PokeApi/PokeApi';
// import './App.css'

function App() {
  // const [contador, setContador] = useState(1)

  // const incrementar = () => setContador(contador + 1);

  // const decrementar = () => {
  //   if (contador > 0) {
  //     setContador(contador - 1);
  //   }
  // }

  // const reiniciar = () => setContador(1);


  return (
    <>
      {/* <section>
        <h1>Contador con React</h1>
        <div className="card">
          <p>{contador}</p>
          <div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={reiniciar}>🔁</button>
          </div>

          {contador <= 0 && (
            <p>⚠No puedes bajar más de 0</p>
          )}
        </div>
      </section>
      <FormModal/> */}
      <PokeApi/>
    </>
  )
}

export default App
