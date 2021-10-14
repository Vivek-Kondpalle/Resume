import React from 'react'

import './project.css'
// import image from '../../img/Programming.png'

const Project = ({ name, github, desc, tech, image }) => {
    return (
        <div className='projectContainer'>
            <div className='LeftContainer'>
                <h3>{name}</h3>
                <div className='flex'>
                    {/* <div className='flex'>
                        <p>Icon</p>
                        <p>Name</p>
                    </div> */}
                    <div className='flex github'>
                        {/* <p>Icon</p> */}
                        <a style={{textDecoration: 'none'}} href={github} target='_blank' rel='noreferrer'>
                        <p>Github</p>
                        </a>
                    </div>
                </div>
                <div>
                    <p>{desc}</p>
                </div>
                <div className='mt-1 mb-2'>
                    <p>Technologies used: </p>
                    <div className='flex'>
                        {tech.map(item => (
                            <div className='flex item-container'>
                                <p>{item},</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='flex'>
                        <p>Icon2</p>
                        <p>Name2</p>
                    </div>
                    <div className='flex'>
                        <p>Icon3</p>
                        <p>Name3</p>
                    </div>
                    <div className='flex'>
                        <p>Icon4</p>
                        <p>Name4</p>
                    </div> */}
                </div>
            </div>
            <div className='imgContainer'>
                <img className='img' src={image} alt='' />
            </div>
        </div>
    )
}

export default Project
