import React from 'react'

import './work.css'
import Divider from '../divider/Divider'

const Work = () => {
    return (
        <div>
            <h3>Internship</h3>
            <div className='flex mb-3'>
                <div className='workCard'>
                    <h4>Software Developer intern Go4Life</h4>
                    <p>June 2021 - Aug 2021</p>
                    <br />
                    <p>
                        - Worked on the Admin Dashboard which was used by the organization to add new products,
                        check all orders, etc . Used React, material ui, React Context for State management and Graphql 
                        Apollo Client.
                    </p>
                    <br />
                    <p>
                        - Build a React native application for delivery Executive which was used for delivering 
                        products to the consumers  using React Native CLI which includes react navigation,
                        async storage, Apollo Client and native features like accessing camera using 
                        react-native-image-picker and location using react-native/geolocation and mapbox.
                    </p>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Work
