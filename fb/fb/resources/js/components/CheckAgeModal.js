import React from 'react'
import { Link } from 'react-router-dom'

class CheckAgeModal extends React.Component {
    render() {
        return (
            <div className='film__page__modal'>
                <span>Вам вже виповнилося 18 років?</span>
                <section>
                    <button onClick={ this.props.checkAge }>Так</button>
                    <Link to="/"><button>Ні</button></Link>
                </section>
            </div>
        )
    }
}

export default CheckAgeModal 