import React from 'react';
import './Resultados.css';

function Resultados({ data }) {
    if (!data) return null;

    return (
        <div className="resultados">
            <h2 className='resultadotitulo'>Resultados del Análisis</h2>
            <div className="tarjetas-container">
                {Object.keys(data).map((key) => {
                    const value = data[key];
                    const roundedValue = typeof value === 'number' ? value.toFixed(2) : value; // Redondeo a 2 decimales si es un número
                    return (
                        <div className="tarjeta" key={key}>
                            <h3 className="tarjeta-titulo">{key}</h3>
                            <p className="tarjeta-contenido">{roundedValue}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Resultados;
