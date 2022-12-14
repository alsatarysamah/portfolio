import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['a', 'm', 'a', 'h', " ",'A', 'l', 's',"a","t","a","r","y"]
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
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className='hone'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="Samah Alsatary"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </div>
          <h1>Front End Developer /Back End Developer /JavaScript Expert </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
        <img href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhh-2Jy0QFHOU2HPjPIe6QSp4bzuhizTNhHlHjBrgdQ&s"></img>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
