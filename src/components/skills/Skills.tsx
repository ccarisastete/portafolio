import './Skills.css';

interface Skill {
  name: string;
  url?: string;
}

const softwareSkills: Skill[] = [
  { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
  { name: 'Power BI', url: 'https://powerbi.microsoft.com/' },
  { name: 'MySQL Workbench', url: 'https://www.mysql.com/products/workbench/' },
  { name: 'Jira', url: 'https://www.atlassian.com/software/jira' },
];

const programmingSkills: Skill[] = [
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'C#' },
  { name: 'PHP' },
];

const languageSkills: Skill[] = [
  { name: 'Español (Nativo)' },
  { name: 'English (Professional)' },
];

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-content'>
        <section>
          <h2>Software</h2>
          <div className='skill-pills'>
            {softwareSkills.map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target='_blank'
                rel='noopener noreferrer'
                className='skill-pill software'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2>Programming</h2>
          <div className='skill-pills'>
            {programmingSkills.map((skill, index) => (
              <span
                key={index}
                className='skill-pill programming'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2>Languages</h2>
          <div className='skill-pills'>
            {languageSkills.map((skill, index) => (
              <span
                key={index}
                className='skill-pill language'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
