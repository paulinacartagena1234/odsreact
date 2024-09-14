import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

const odsInfo = [
    'Erradicar la pobreza en todas sus formas en todo el mundo',
    'Acabar con el hambre, lograr la seguridad alimentaria y mejorar la nutrición',
    'Garantizar una vida saludable y promover el bienestar para todos en todas las edades.',
    'Asegurar una educación inclusiva, equitativa y de calidad, y promover oportunidades de aprendizaje durante toda la vida.',
    'Lograr la igualdad de género y empoderar a todas las mujeres y niñas.',
    'Asegurar el acceso al agua y el saneamiento para todos',
    ' Asegurar el acceso a una energía asequible, fiable, sostenible y moderna.',
    'Promover el crecimiento económico inclusivo y sostenible, el empleo pleno y productivo, y el trabajo decente para todos.',
    'Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible, y fomentar la innovación.',
    'Reducir la desigualdad en y entre los países.',
    'Hacer que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.',
    ' Garantizar modalidades de consumo y producción sostenibles.',
    'Adoptar medidas urgentes para combatir el cambio climático y sus efectos.',
    'Conservar y utilizar sosteniblemente los océanos, mares y recursos marinos.',
    'Gestionar de manera sostenible los bosques, combatir la desertificación, detener e invertir la degradación de la tierra y detener la pérdida de biodiversidad.',
    'Promover sociedades pacíficas e inclusivas, proporcionar acceso a la justicia para todos y construir instituciones efectivas, responsables e inclusivas.',
    'Fortalecer los medios de implementación y revitalizar la Alianza Global para el Desarrollo Sostenible.'

];

function Inicio() {
    const [tooltipIndex, setTooltipIndex] = useState(null);

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

                <div className="ods-grid">
                    {[...Array(17)].map((_, index) => {
                        const imageSrc = `/images/${index + 1}.jpg`;
                        const fallbackSrc = `/images/${index + 1}.png`;

                        return (
                            <div
                                key={index}
                                className="ods-item"
                                onMouseOver={() => setTooltipIndex(index)}
                                onMouseOut={() => setTooltipIndex(null)}
                            >
                                <img
                                    src={imageSrc}
                                    onError={(e) => e.target.src = fallbackSrc}
                                    alt={`ODS ${index + 1}`}
                                />
                                {tooltipIndex === index && (
                                    <div className="tooltip">
                                        {odsInfo[index]}
                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Inicio;
