import React, { useEffect, useState } from "react";
import "./Resultados.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Resultados({ data }) {
  // Llamada de hooks siempre al principio
  const [formattedData, setFormattedData] = useState([]);
  const truncateLabel = (label) => {
    const odsIndex = label.match(/ODS \d+/);
    return odsIndex ? odsIndex[0] : label;
  };

  useEffect(() => {
    if (data) {
      // Formatear los datos y ordenarlos del menor al mayor porcentaje
      const formatted = Object.keys(data)
        .map((key) => ({
          nombre: truncateLabel(key), // Acortamos el texto a "ODS X"
          similitud: parseFloat(data[key].toFixed(2)), // Limita a 2 decimales
        }))
        .sort((a, b) => a.similitud - b.similitud); // Ordena los datos por similitud de menor a mayor

      setFormattedData(formatted);
    }
  }, [data]);

  // Si no hay datos, mostrar algo en el JSX (no antes de los hooks)
  if (!data) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <div className="resultados">
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
          width: "100%",
          maxWidth: "90vw",
          minWidth: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Similitud con los Objetivos de Desarrollo Sostenible (ODS)
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={formattedData}
            margin={{ top: 20, right: 30, left: 80, bottom: 100 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="nombre"
              angle={-45}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 12 }}
              label={{ value: "ODS", position: "insideBottom", offset: -40 }}
            />
            <YAxis
              label={{
                value: "Porcentaje de Similitud",
                angle: -90,
                position: "left",
                dx: 0,
                dy: -80,
              }}
            />
            <Tooltip />
            <Legend verticalAlign="middle" align="right" layout="vertical" />
            <Bar dataKey="similitud" fill="#2e7d32" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h2 className="resultadotitulo">Resultados del Análisis</h2>
      <div className="tarjetas-container">
        {Object.keys(data).map((key) => {
          const value = data[key];
          const roundedValue =
            typeof value === "number" ? value.toFixed(5) : value; // Redondeo a 5 decimales si es un número
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
