import React from 'react'

import './skills.css'
import reactjs from '../../img/reactjs.svg'
import html from '../../img/html.svg'
import css from '../../img/css-3.svg'
import express from '../../img/express.svg'
import javascript from '../../img/javascript.svg'
import mongodb from '../../img/mongodb.svg'
import nodejs from '../../img/nodejs.svg'
import Divider from '../divider/Divider'

const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <div className='flex justify mb-3'>
                <h3>Frontend</h3>
                <div className='flex'>
                    <div className='flex-column margin-right'>
                        <img src={html} alt='' />
                        <p className='bold'>HTML 5</p>
                    </div>        
                    <div className='flex-column margin-right'>
                        <img src={css} alt='' />
                        <p className='bold'>CSS 3</p>
                    </div>        
                    <div className='flex-column margin-right'>
                        <img src={javascript} alt='' />
                        <p className='bold'>Javascript</p>
                    </div>        
                    <div className='flex-column margin-right'>
                        <img src={reactjs} alt='' />
                        <p className='bold'>ReactJS</p>
                    </div>        
                    <div className='flex-column margin-right'>
                        <img src={reactjs} alt='' />
                        <p className='bold'>React Native</p>
                    </div>        
                </div>
            </div>
            <div className='flex justify mb-3'>
                <h3>Backend</h3>
                <div className='flex'>
                    <div className='flex-column margin-right'>
                        <img src={nodejs} alt='' />
                        <p className='bold'>NodeJS</p>
                    </div>        
                    <div className='flex-column margin-right'>
                        <img src={express} alt='' />
                        <p className='bold'>ExpressJS</p>
                    </div>               
                </div>
            </div>
            <div className='flex justify mb-3'>
                <h3>Database</h3>
                <div className='flex'>
                    <div className='flex-column margin-right'>
                        <img src={mongodb} alt='' />
                        <p className='bold'>MongoDB</p>
                    </div>               
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Skills
