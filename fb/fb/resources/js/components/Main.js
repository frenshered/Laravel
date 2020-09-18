import React from 'react'
import FilmCard from './FilmCard.js'

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="main__films__container">
                        {
                            this.props.data.map( ( film, index ) => 
                                <FilmCard getSelectedFilmData={ this.props.getSelectedFilmData } key={ index } data={ film } /> 
                            )
                        }  
                </div>
            </main>
        )
    }
}

export default Main