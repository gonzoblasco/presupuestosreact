import React, { useEffect, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/controlPresupuesto';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      const presupuestRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestRestante);

      guardarCrearGasto(false);
    }
  }, [crearGasto]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            (preguntaPresupuesto)
              ? (
                <Pregunta
                  guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                />)
              : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                    <Listado gastos={gastos} />
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
