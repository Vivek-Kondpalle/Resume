import React from 'react'

import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'

import './about.css'
import image from '../../img/Programming.png'
import Divider from '../divider/Divider'

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='aboutInfo'>
                <p>Hello , I am Vivek Kondpalle a full stack developer. I usually work with React, React Native,
                    Nodejs, Expressjs, MongoDB.
                </p>
                <img className='img' src={image} alt='' />
            </div>
            <div className='icons'>
                <a href='https://github.com/Vivek-Kondpalle' target='_blank' rel='noreferrer'>
                <img src={github} alt='' style={{marginRight: 20}} />
                </a>
                <a href='https://in.linkedin.com/in/vivek-kondpalle-64950a20a' target='_blank' rel='noreferrer'>
                <img src={linkedin} alt='' style={{width: 48, height: 48, marginRight: 20}} />
                </a>
                <a href='https://twitter.com/KondpalleVivek' target='_blank' rel='noreferrer'>
                <img src={twitter} alt='' style={{width: 48, height: 48, marginRight: 20}} />
                </a>
            </div>
            <Divider />
        </div>
    )
}

export default About
