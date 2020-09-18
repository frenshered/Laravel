import React from 'react'
import { Link } from 'react-router-dom'

class LinksInHeader extends React.Component {
    render() {
        return (
            <div className="header__links__block">
                <Link to="/contacts" className="header__link">Contacts</Link>
                <Link to="/about" className="header__link">About</Link>
            </div>
        )
    }
}

export default LinksInHeader