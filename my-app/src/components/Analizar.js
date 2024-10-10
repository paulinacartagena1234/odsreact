import React, { useState, useEffect } from "react";
import "./Analizar.css";
import { useNavigate } from "react-router-dom";

function Analizar({ onResults }) {
  const [file, setFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === "application/pdf" ||
        selectedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFile(selectedFile);
      setFileInfo(`Nombre del archivo: ${selectedFile.name}`);
    } else {
      alert("Por favor, sube un archivo PDF o Word válido.");
      setFile(null);
      setFileInfo(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecciona un archivo antes de analizar.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true);

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        setTimeout(() => {
          onResults(result);
          setIsLoading(false);
          navigate("/resultados");
        }, 500); // Simula un pequeño retraso para mostrar el spinner
      } else {
        alert("Error al analizar el archivo.");
        setIsLoading(false);
      }
    };

    xhr.onerror = () => {
      alert("Error al conectar con la API.");
      setIsLoading(false);
    };
    //http://192.168.110.213:10000/upload para prueba
    //https://pruebaapiods-4.onrender.com/upload para el server de verdad :D
    xhr.open("POST", "http://192.168.110.213:10000/upload", true);
    xhr.send(formData);
  };

  return (
    <div className="analizar">
      <h2 className="analizartitulo">Analizar Documento</h2>
      <p className="instrucciones">
        Elige un archivo PDF o Word (no se aceptan otros formatos) y luego haz
        clic en el botón "Analizar" para iniciar el proceso. Asegúrate de
        seleccionar un archivo válido para obtener los resultados de manera
        correcta.
      </p>
      <input
        type="file"
        accept=".pdf, .doc, .docx"
        onChange={handleFileChange}
      />
      {fileInfo && <p>{fileInfo}</p>}
      <button className="btn-analizar" onClick={handleSubmit} disabled={!file}>
        Analizar
      </button>

      {/* Spinner de carga */}
      {isLoading && (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Analizar;
