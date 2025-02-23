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
    positon: 'Professional Internship Systems Analysis',
    period: 'September 2024 - November 2024',
    description: [
      'Requirements gathering, analysis, and design of solutions for issues raised by collaborators and administrative staff in the human resources area.',
      'Documentation of incidents and proposal of solutions to optimize processes before final implementation.',
      'Design and optimization of prompts for artificial intelligence systems in document analysis.',
      'Conducting thorough testing during the User Acceptance Testing (UAT) phase to ensure quality and compliance with client requirements.',
    ],
  },
  {
    company: 'Universidad Católica de Temuco, Temuco, Chile',
    positon: 'Camera Management Software',
    period: 'September 2022 - December 2022',
    description: [
      'Design and development of a website for intuitive security camera management, improving user experience.',
      'Implementation of key functionalities for remote control and real-time monitoring of security devices.',
      'Close collaboration with the client to adapt the interface and features to their specific needs.',
    ],
  },
  {
    company: 'Universidad Católica de Temuco, Temuco, Chile',
    positon: 'Educational Video Game Development "Virvet 2"',
    period: 'March, 2022 - May, 2022',
    description: [
      'Leadership and direction in the comprehensive development of an educational video game for the Veterinary program, designed to complement student learning.',
      'Participation in all project stages, including requirements gathering, conceptual design, technical development, user testing, and client support.',
      'Implementation of interactive mechanics and dynamics to enhance the learning experience.',
      'Coordination with teachers and end users to ensure products met educational and functional expectations.',
    ],
  },
  {
    company: 'Universidad Católica de Temuco, Temuco, Chile',
    positon: 'Educational Video Game Development "Virvet"',
    period: 'March, 2022 - May, 2022',
    description: [
      'Leadership and direction in the comprehensive development of an educational video game for the Veterinary program, designed to complement student learning.',
      'Participation in all project stages, including requirements gathering, conceptual design, technical development, user testing, and client support.',
      'Implementation of interactive mechanics and dynamics to enhance the learning experience.',
      'Coordination with teachers and end users to ensure products met educational and functional expectations.',
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
