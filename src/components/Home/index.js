import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import './index.scss';
import Logo from './Logo';
import logoImg from '../../assets/images/k.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['h', 'o', 'a'];
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ];

    useEffect(() => {
        let id = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => {
            clearTimeout(id);
        }
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={logoImg} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={20}
                        />
                    </h1>
                    <h2>Fullstack Developer / Technology Enthusiast</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home