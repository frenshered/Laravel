import { ThumbUpOutlined } from '@material-ui/icons'
import React from 'react'
import CheckAgeModal from '../components/CheckAgeModal.js'

class FilmPage extends React.Component {
    constructor(props) {
        super()

        this.state = {
            ageOk: true
        }

        this.checkAge = this.checkAge.bind(this)
    }

    checkAge = () => {
        this.setState({ ageOk: !this.state.ageOk })
    }

    componentDidMount() {
        if ( parseInt(this.props.data.age) >= 18 )  this.checkAge() 
    }

    render() {
        return (
            <React.Fragment>
            {
                !this.state.ageOk ? <CheckAgeModal checkAge={ this.checkAge } /> 
                    :
                <div className="container film__page__container">
                    <h1 className="film__page__title">{ this.props.data.title }</h1>
                    <span className="film__page__slogan">{ this.props.data.slogan }</span>
                    <div className="first__film__info">
                        <span>{ this.props.data.year }</span>
                        <span>{ this.props.data.country }</span>
                        {
                            this.props.data.category.map( category => <span>{ category }</span> )
                        }
                        <span>⏱️{ this.props.data.time }</span>
                        <span>{ this.props.data.age }</span>
                    </div>
                    <video poster={ this.props.data.poster }>
                        <source src={ this.props.data.trailers_url } />
                    </video>
                </div>
            }
            </React.Fragment>
        )
    }
}

export default FilmPage