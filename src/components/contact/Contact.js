import React from 'react'

import './contact.css'
import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'
import resume from '../../img/Resume.pdf'

const Contact = () => {
    return (
        <div>
            <h3>Contact</h3>
            <div className='flex-contact'>
                <div>
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <div className='icons-contact'>
                        <a href='https://github.com/Vivek-Kondpalle' target='_blank' rel='noreferrer'>
                            <img src={github} alt='' style={{ marginRight: 20 }} />
                        </a>
                        <a href='https://in.linkedin.com/in/vivek-kondpalle-64950a20a' target='_blank' rel='noreferrer'>
                            <img src={linkedin} alt='' style={{ width: 48, height: 48, marginRight: 20 }} />
                        </a>
                        <a href='https://twitter.com/KondpalleVivek' target='_blank' rel='noreferrer'>
                            <img src={twitter} alt='' style={{ width: 48, height: 48, marginRight: 20 }} />
                        </a>
                    </div>
                </div>
                <div className='btnContainer'>
                    <a href={resume} download='resume'>
                        <button className='btn'>Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
