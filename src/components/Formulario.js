import React, { useState } from 'react';
import Error from './Error';

function Formulario(props) {
  const [nombreGasto, guardarNombreGasto] = useState('');
  const [cantidadGasto, guardarCantidadGasto] = useState(0);
  const [error, guardarError] = useState(false);

  const { guardarGasto } = props;

  const agregarGasto = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
      guardarError(true);
      return;
    }

    const gasto = {
      nombreGasto,
      cantidadGasto
    };

    guardarGasto();
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos Aquí</h2>
      {error && <Error mensaje="Ambos campos son obligatorios ó Presupuesto incorrecto" />}
      <div className="campo">
        <label htmlFor="nombreGasto">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          name="nombreGasto"
          onChange={(e) => guardarNombreGasto(e.target.value)}
          placeholder="Ej: Transporte"
        />
      </div>
      <div className="campo">
        <label htmlFor="cantidadGasto">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          name="cantidadGasto"
          onChange={(e) => guardarCantidadGasto(parseInt(e.target.value, 10))}
          placeholder="Ej: 300"
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>

  );
}

export default Formulario;
