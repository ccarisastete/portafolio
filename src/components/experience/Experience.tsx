import './Experience.css';

interface ExperienceCards {
  company: string;
  positon: string;
  period: string;
  description: string[];
}

const experienceData: ExperienceCards[] = [
  {
    company: 'Cenconsud S.A., Santiago, Chile',
    positon: 'Practica profesional Análisis de sistemas',
    period: 'Septiembre 2024 - Noviembre 2024',
    description: [
      'Levantamientos, análisis y diseño de soluciones a problemas planteados por colaboradores y personal administrativo del área de recursos humanos.',
      'Documentación de incidencias y propuesta de soluciones para optimizar procesos antes de la implementación final.',
      'Diseño y optimización de prompts para sistemas de inteligencia artificial, en el análisis de documentos.',
      'Realización de pruebas exhaustivas en la etapa de User Acceptance Testing (UAT) para garantizar la calidad y cumplimiento de los requisitos del cliente.',
    ],
  },
  {
    company: 'Universidad Católica de Temuco, Temuco, Chile',
    positon: 'Software de manejo de cámaras',
    period: 'Septiembre 2022 - Diciembre 2022',
    description: [
      'Diseño y desarrollo de página web para la gestión intuitiva de cámaras de seguridad, mejorando la experiencia del usuario.',
      'Implementación de funcionalidades clave para el control remoto y la supervisión en tiempo real de dispositivos de seguridad.',
      'Colaboración estrechamente con el cliente para adaptar la interfaz y las características a sus necesidades específicas.',
    ],
  },
  {
    company: 'Universidad Católica de Temuco, Temuco, Chile',
    positon: 'Desarrollo De videojuego educativo "Virvet 2"',
    period: 'Marzo, 2022 - Mayo, 2022',
    description: [
      'Liderazgo y dirección en el desarrollo integral de un videojuego educativo para la carrera de Veterinaria, diseñado para complementar el aprendizaje de los estudiantes.',
      'Participación en todas las etapas del proyecto, incluyendo levantamiento de requerimientos, diseño conceptual, desarrollo técnico, pruebas de usuario y soporte al cliente.',
      'Implementación de mecánicas interactivas y dinámicas para mejorar la experiencia de aprendizaje.',
      'Coordinación con docentes y usuarios finales para garantizar que los productos cumplieran con las expectativas educativas y funcionales.',
    ],
  },
  {
    company: 'Universidad Católica de Temuco, Temuco, Chile',
    positon: 'Desarrollo De videojuego educativo "Virvet"',
    period: 'Marzo, 2022 - Mayo, 2022',
    description: [
      'Liderazgo y dirección en el desarrollo integral de un videojuego educativo para la carrera de Veterinaria, diseñado para complementar el aprendizaje de los estudiantes.',
      'Participación en todas las etapas del proyecto, incluyendo levantamiento de requerimientos, diseño conceptual, desarrollo técnico, pruebas de usuario y soporte al cliente.',
      'Implementación de mecánicas interactivas y dinámicas para mejorar la experiencia de aprendizaje.',
      'Coordinación con docentes y usuarios finales para garantizar que los productos cumplieran con las expectativas educativas y funcionales.',
    ],
  },
];

const Experience = () => {
  return (
    <div className='experience'>
      <div className='experience-content'>
        <h1>Experience</h1>
        <div className='experience-cards'>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className='experience-card'
            >
              <h2>{exp.company}</h2>
              <h3>{exp.positon}</h3>
              <p className='period'>{exp.period}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
