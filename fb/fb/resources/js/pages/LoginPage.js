import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super()

        this.state = {
            login: '',
            password: '',
            isError: '',
            serverValue: '',
            serverMessage: ''
        }

        this.inputChange = this.inputChange.bind(this)
        this.processingData = this.processingData.bind(this)
    }

    processingData = () => {
        if ( this.state.login == false || this.state.password == false ) {
            this.setState({ isError: 'Некоректні дані' })
        } else {
            if ( this.state.password.length < 8 || this.state.login.length < 4 ) {
                this.setState({ isError: 'Некоректні дані' })
            } else {
                axios.post('/api/login', 
                    { login: this.state.login, password: this.state.password }
                ).then( ( response ) => {
                    if ( response.data.value === false ) {
                        this.setState({ serverValue: response.data.value, serverMessage: response.data.message, isError: true })
                    } else {
                        this.props.updateIsUserLogined( this.state.login )
                        this.setState({ serverValue: response.data.value, serverMessage: response.data.message })
                    }
                })
                .catch( ( e ) => {
                    throw new Error( e )
                })
            }
        }
    }

    inputChange = ( event ) => {
        let target = event.target.name

        if ( target === 'login' ) {
            this.setState({ login: event.target.value })
        }

        if ( target === 'password' ) {
            this.setState({ password: event.target.value })
        }
    }

    render() {
        if ( this.state.serverValue === true ) {
            return <Redirect to="/" />
        }
        return (
            <div className="container auth__container">
                <div className="auth__block">
                    <h1 className="auth__title">Login</h1>
                    {
                        !this.state.isError ? '' :
                        <span className="uncorrect__data__in__contacts__page">
                            { this.state.serverMessage || this.state.isError }
                        </span>
                    }
                    <section className="inputs__section">
                        <input type="text" name="login" placeholder="Login: " className="auth__input" 
                            onChange={ ( event ) => this.inputChange( event ) }
                        />
                        <input type="password" name="password" placeholder="Password: " className="auth__input" 
                            onChange={ ( event ) => this.inputChange( event ) }
                        />
                    </section>
                    <button className="send__form__button"
                        onClick={ this.processingData }
                    >
                        Login
                    </button>
                    <div className="auth__link__block">
                        <section>
                            <span className="auth__link__block__text">Ще не маєте аккаунта?</span>
                            <Link to="/registration" className="auth__link">Зареєструватись</Link>
                        </section>
                        <Link to="/" className="auth__link">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage