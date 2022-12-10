import { Link, NavLink } from 'react-router-dom';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Logo from '../../assets/images/logo.png';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer noopener' href='https://www.linkedin.com/in/khoa-dang-b60a70181/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer noopener' href='https://github.com/GVNkyle'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer noopener' href='skype:live:dangkhoa080998'>
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar