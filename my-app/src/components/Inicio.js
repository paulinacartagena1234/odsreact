import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
    return (
        <div className="inicio">
            <header>
                <h1 className="titulo">Analizador ODS</h1>
                <p className='text'>
                    El funcionamiento del software Analizador ODS se basa en la evaluación y
                    clasificación de documentos en función de su alineación con los Objetivos de
                    Desarrollo Sostenible (ODS).
                </p>

                <Link to="/analizar" className="btn-analizar">
                    Analizar Documento
                </Link>
            </header>

            <section className="ods-section">
                <h2 className="ods-titulo">Objetivos de Desarrollo Sostenible</h2>
                <ul className="ods-lista">
                    <li><strong>1. Fin de la pobreza:</strong> Erradicar la pobreza extrema en todas sus formas.</li>
                    <li><strong>2. Hambre cero:</strong> Garantizar la seguridad alimentaria, mejorar la nutrición y promover la agricultura sostenible.</li>
                    <li><strong>3. Salud y bienestar:</strong> Asegurar una vida saludable y promover el bienestar para todas las personas de todas las edades.</li>
                    <li><strong>4. Educación de calidad:</strong> Garantizar una educación inclusiva, equitativa y de calidad.</li>
                    <li><strong>5. Igualdad de género:</strong> Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.</li>
                    <li><strong>6. Agua limpia y saneamiento:</strong> Asegurar la disponibilidad y gestión sostenible del agua y el saneamiento.</li>
                    <li><strong>7. Energía asequible y no contaminante:</strong> Garantizar el acceso a una energía segura, asequible y sostenible.</li>
                    <li><strong>8. Trabajo decente y crecimiento económico:</strong> Fomentar el crecimiento económico sostenido y el empleo digno para todos.</li>
                    <li><strong>9. Industria, innovación e infraestructura:</strong> Construir infraestructuras resilientes, promover la industrialización sostenible e incentivar la innovación.</li>
                    <li><strong>10. Reducción de las desigualdades:</strong> Reducir la desigualdad dentro y entre los países.</li>
                    <li><strong>11. Ciudades y comunidades sostenibles:</strong> Lograr que las ciudades y asentamientos humanos sean inclusivos, seguros y sostenibles.</li>
                    <li><strong>12. Producción y consumo responsables:</strong> Garantizar patrones sostenibles de consumo y producción.</li>
                    <li><strong>13. Acción por el clima:</strong> Adoptar medidas urgentes para combatir el cambio climático.</li>
                    <li><strong>14. Vida submarina:</strong> Conservar y utilizar sosteniblemente los océanos, mares y recursos marinos.</li>
                    <li><strong>15. Vida de ecosistemas terrestres:</strong> Proteger y restaurar los ecosistemas terrestres, frenando la pérdida de biodiversidad.</li>
                    <li><strong>16. Paz, justicia e instituciones sólidas:</strong> Promover sociedades pacíficas, inclusivas y justas.</li>
                    <li><strong>17. Alianzas para lograr los objetivos:</strong> Revitalizar la alianza mundial para el desarrollo sostenible.</li>
                </ul>
            </section>
        </div>
    );
}

export default Inicio;
