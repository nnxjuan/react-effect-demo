import { useState, useEffect } from 'react';

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Efecto que se ejecuta cuando count cambia
  useEffect(() => {
    setLastUpdate(new Date());
    document.title = `Contador: ${count}`;
    
    // Función de limpieza (cleanup)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Array de dependencias con count

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <p>Última actualización: {lastUpdate.toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Counter;
