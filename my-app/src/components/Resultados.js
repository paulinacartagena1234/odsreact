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

  const completeData = Object.keys(data).map((key) => ({
    nombre: key, // Nombre completo del ODS
    similitud: data[key], // Porcentaje de similitud
  }));

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

      <div className="resultados-ordenados">
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}
        >
          Resultados del Análisis
        </h2>
        <div className="cards-container">
          {completeData
            .slice()
            .sort((a, b) => b.similitud - a.similitud) // Ordena de mayor a menor
            .map((item, index) => (
              <div className="card-item" key={index}>
                <h3 className="ods-nombre">{item.nombre}</h3>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${item.similitud}%` }}
                  ></div>
                </div>
                <p className="ods-porcentaje">{item.similitud.toFixed(2)}%</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Resultados;
