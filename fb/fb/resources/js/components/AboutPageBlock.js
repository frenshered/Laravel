import React from 'react'

class AboutPageBlock extends React.Component {
    render() {
        return (
            <div className="about__page__block">
                <h1 className="about__page__title">{ this.props.title }</h1>
                <span className="about__page__text">{ this.props.text }</span>
            </div>
        )
    }
}

export default AboutPageBlock