import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <div className='about-text'>
          <h1>Cesar Caris Astete</h1>
          <p>
            I am a Civil Engineer in Computer Science with a specialization in
            Software Development, passionate about technology, data analysis,
            and process optimization. I have experience in systems analysis,
            requirements gathering, and designing technological solutions,
            including implementing artificial intelligence for document analysis
            and conducting User Acceptance Testing (UAT).
          </p>
          <p>
            Throughout my career, I have developed software for security camera
            management and participated in creating educational video games
            focused on veterinary education. I have also worked on process
            automation in large companies like Cencosud, improving workflows in
            the human resources sector.
          </p>
          <p>
            I am proficient in languages such as Python, C#, JavaScript, and
            PHP, as well as tools like Power BI, Visual Studio Code, MySQL, and
            Jira. I am always eager to learn and improve, which has led me to
            specialize in React and data analysis.
          </p>
          <p>
            Beyond technology, I enjoy heavy metal music, video games, and
            studying topics such as demonology and symbolism. My analytical
            mindset and constant curiosity allow me to adapt to new challenges
            and provide efficient solutions to complex problems.
          </p>
        </div>
        <div className='about-image'>
          <img
            src='https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&h=500&fit=crop'
            alt='Cesar Caris Astete'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
