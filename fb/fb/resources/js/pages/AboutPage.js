import React from 'react'
import AboutPageBlock from '../components/AboutPageBlock.js'
import { Link } from 'react-router-dom'

class AboutPage extends React.Component {
    render() {
        return (
            <div className="container container__about">
                <section>
                    {
                        this.props.data.titles.map(  ( title, index ) => 
                            <AboutPageBlock key={ index } title={ title } text={ this.props.data.text[index] } /> 
                        )
                    }  
                </section>
                <nav>
                    <Link to="/" className="about__page__back">Back</Link>
                </nav>
            </div>
        )
    }
}

export default AboutPage