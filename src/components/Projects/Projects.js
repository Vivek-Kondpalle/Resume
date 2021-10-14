import React from 'react'

import Project from '../Project/Project'
import Divider from '../divider/Divider'
import proShop from '../../img/ProShop.png' 
import devConnector from '../../img/devConnector.png' 
import shopapp from '../../img/shopapp.png' 
import socialapp from '../../img/social.png' 

const projects = [
    {
        id: 1,
        name: 'ProShop',
        githubLink: 'https://github.com/Vivek-Kondpalle/ProShop',
        image: proShop,
        description: `ProShop is an E-commerce Platform which lets users buy products, 
                    add them to cart, order and pay via PayPal. Users can browse the products without signing in. 
                    But for placing an order or reviewing an item user must be signed in. 
                    Admin can create and update product. Admin can look at all the orders placed.`,
        technologies: ['ReactJS', 'Redux', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JWT']
    },
    {
        id: 2,
        name: 'DevConnector',
        githubLink: 'https://github.com/Vivek-Kondpalle/DevConnector',
        image: devConnector,
        description: `DevConnector is a social media application for developers which lets users create a
                    post, like and comment on a post. Users can look for all the other developers which are 
                    present on the platform. User must be signed in to create a post / view profile / like or dislike
                    a post / comment on a post.`,
        technologies: ['ReactJS', 'Redux', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'JWT']
    },
    {
        id: 3,
        name: 'ShopApp',
        githubLink: 'https://github.com/Vivek-Kondpalle/Shop-App',
        image: shopapp,
        description: `Shop App is a react native app where user can add products to cart, order them, view 
                    details and create their own products. User must be signed in to view or order products.
                    Authentication and storing products and orders is done with the help of firebase.`,
        technologies: ['React Native', 'Redux', 'React-Navigation', 'Firebase', 'AsyncStorage']
    },
    {
        id: 4,
        name: 'Social App',
        githubLink: 'https://github.com/Vivek-Kondpalle/Social-App',
        image: socialapp,
        description: `Social is a social media react native app. User can sign up / log in, like and dislike 
                    a post and add new post. User must be logged in to like / dislike a post and add a new 
                    post. Firebase is used for authentication, storing users data, post data and firebase 
                    storage is used for storing images.`,
        technologies: ['React Native', 'Redux', 'React-Navigation', 'Firebase', 'Lottie']
    },
]

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            {projects.map(project => (
                <Project
                    key={project.id}
                    name={project.name}
                    github={project.githubLink}
                    desc={project.description}
                    tech={project.technologies}
                    image={project.image}
                />
            ))}
            <Divider />
        </div>
    )
}

export default Projects
