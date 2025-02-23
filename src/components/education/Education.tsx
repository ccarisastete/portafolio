import './Education.css';

interface EducationCards {
  title: string;
  place: string;
  period: string;
}

const educationData: EducationCards[] = [
  {
    title: 'Ingeniera civil en informática mención en desarrollo de software',
    place: 'Universidad Católica de Temuco, Temuco, Chile',
    period: 'Marzo, 2016 - Diciembre 2024',
  },
  {
    title: 'Fundamentos del Análisis de datos',
    place: 'LinkedIn Learning, Online, Chile',
    period: 'Julio, 2024',
  },
  {
    title: 'React - Guia definitiva',
    place: 'Udemy, Online, Chile',
    period: 'Diciembre 2023',
  },
];

const Education = () => {
  return (
    <div className='education'>
      <div className='education-content'>
        <h1>Education</h1>
        <div className='education-cards'>
          {educationData.map((exp, index) => (
            <div
              key={index}
              className='education-card'
            >
              <h2>{exp.title}</h2>
              <h3>{exp.place}</h3>
              <p className='period'>{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
