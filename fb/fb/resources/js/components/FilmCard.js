import React from 'react'
import { Link } from 'react-router-dom'

class FilmCard extends React.Component {
    render() {
        return (
            <Link to={ '/' + this.props.data.title.split(' ').join('-') }>
                <div className="film__card" onClick={ () => this.props.getSelectedFilmData( this.props.data ) }>
                    <img src={ this.props.data.poster } alt="poster" className="film__card__image" />
                    <span className="film__card__name">{ this.props.data.title }</span>
                    <span className="film__card__rating"><p>Рейтинг: </p> { this.props.data.kinopoisk_rating }</span>
                    <span className="film__card__category__block">
                        {
                            this.props.data.category.join(', ')
                        }
                    </span>
                </div>
            </Link>
        )
    }
}

export default FilmCard
