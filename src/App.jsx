import { useState } from 'react'
import Counter from './components/Counter'
import Card from './components/Card'
import './App.css'

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="app">
      <h1>Demo de useEffect y props.children</h1>
      
      {/* Ejemplo de props.children con Card */}
      <Card title="Ejemplo de props.children">
        <p>Este es un contenido hijo que se pasa al componente Card.</p>
        <p>Puede contener cualquier elemento JSX.</p>
        <button onClick={() => alert('¡Botón dentro del Card!')}>
          Botón en children
        </button>
      </Card>

      <div className="counter-section">
        <h2>Ejemplo de useEffect con dependencias</h2>
        <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? 'Ocultar Contador' : 'Mostrar Contador'}
        </button>
        
        {showCounter && (
          <Card title="Componente Counter">
            <Counter initialValue={0} />
          </Card>
        )}
      </div>
    </div>
  )
}

export default App
