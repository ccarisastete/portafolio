import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <h1>Contact Me</h1>

        <div className='contact-grid'>
          <div className='contact-item'>
            <h2>Social Media</h2>
            <div className='social-links'>
              <a
                href='https://github.com/ccarisastete'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub /> GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/cesarcaris/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className='contact-item'>
            <h2>Contact Info</h2>
            <div className='contact-info'>
              <a href='mailto:cesarantonioastete98@gmail.com'>
                📧 Email: cesarantonioastete98@gmail.com
              </a>
              <p>📱 Phone: +569 8803 9947</p>
              <p>🌎 Location: Santiago, Chile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
