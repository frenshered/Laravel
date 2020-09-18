import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            email: '',
            password: '',
            isError: '',
            serverMessage: '',
            serverValue: ''
        }

        this.inputChange = this.inputChange.bind(this)
        this.processingData = this.processingData.bind(this)
    }

    inputChange = ( event ) => {
        let target = event.target.name

        if ( target === 'login' ) {
            this.setState({ login: event.target.value })
        } 

        if ( target === 'email' ) {
            this.setState({ email: event.target.value })
        }

        if ( target === 'password' ) {
            this.setState({ password: event.target.value })
        }
    }

    processingData = () => {
        if ( this.state.login == false || this.state.email == false || this.state.password == false ) {
            this.setState({ isError: 'Некоректні дані' })
        } else {
            if ( this.state.password.length < 8 || this.state.login.length < 4 ) {
                this.setState({ isError: 'Некоректні дані' })
            } else {
                axios.post('/api/registration', 
                    { login: this.state.login, email: this.state.email, password: this.state.password }
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

    render() {
        if ( this.state.serverValue === true ) {
            return <Redirect to="/" />
        }
        return (
            <div className="container auth__container">
                <div className="auth__block">
                    <h1 className="auth__title">Registration</h1>
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
                        <input type="email" name="email" placeholder="Email: " className="auth__input" 
                            onChange={ ( event ) => this.inputChange( event ) }
                        />
                        <input type="password" name="password" placeholder="Password: " className="auth__input" 
                            onChange={ ( event ) => this.inputChange( event ) }
                        />
                    </section>
                    <button className="send__form__button"
                        onClick={ this.processingData }
                    >
                        Registration
                    </button>
                    <div className="auth__link__block">
                        <section>
                            <span className="auth__link__block__text">Вже маєте аккаунт?</span>
                            <Link to="/login" className="auth__link">Ввійти</Link>
                        </section>
                        <Link to="/" className="auth__link back">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage