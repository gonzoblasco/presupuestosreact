import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ((props) => {
  const { guardarPreguntaPresupuesto, guardarPresupuesto } = props;
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarPreguntaPresupuesto(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error && <Error mensaje="El Presupuesto es Incorrecto" />}
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          className="u-full-width"
          placeholder="Agrega tu Presupuesto"
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
          type="number"
        />
        <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
      </form>
    </Fragment>
  );
});

export default Pregunta;
