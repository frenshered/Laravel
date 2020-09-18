import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'

class UserBlock extends React.Component {
    render() {
        return (
            <div className="header__user__block">
                {
                    this.props.isUserLogined ? 
                        <React.Fragment>
                            <a href="#" className="user__profile">
                                <AccountCircleIcon color="primary" style={{ fontSize: 30 }} />
                            </a>
                            <span className="user__name">{ this.props.userName }</span>
                        </React.Fragment>
                    :   <React.Fragment>
                            <Link to="/registration" className="user__block__link">Зареєструватись</Link>
                            <Link to="/login" className="user__block__link">Ввійти</Link>
                        </React.Fragment>
                }
            </div>
        )
    }
}

export default UserBlock