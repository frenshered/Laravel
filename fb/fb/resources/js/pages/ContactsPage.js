import React from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import { Link } from 'react-router-dom'

class ContactsPage extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: '',
            isError: false,
            textClient: 'Заповніть всі поля !!!',
            textServer: 'Невірний email !!!',
            errorText: '',
            requestOK: true,
            openModal: false,
        }

        this.processingData = this.processingData.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }

    inputChange = ( event ) => {
        let target = event.target.name

        if ( target === 'name' ) {
            this.setState({ name: event.target.value })
        } 

        if ( target === 'email' ) {
            this.setState({ email: event.target.value })
        }

        if ( target === 'message' ) {
            this.setState({ message: event.target.value })
        }
    }

    processingData = () => {
        if ( this.state.name == false || this.state.email == false || this.state.massage == false ) {
            this.setState({ isError: true, errorText: this.state.textClient })
        } else {
            axios.post('/api/contacts-form', 
                { name: this.state.name, email: this.state.email, message: this.state.message }
            ).then( ( response ) => {
                if ( response.data === true ) {
                    this.setState({ isError: false, requestOK: true, openModal: true })
                } else {
                    this.setState({ isError: true, requestOK: false, errorText: this.state.textServer })
                }  
            })
            .catch( ( e ) => {
                console.log(e)
            })
        }
    }

    render() {
        return (
            <div className="container container__contacts">
                {
                    !this.state.openModal ? 
                        <React.Fragment>
                            <h1>Надіслати повідомлення</h1>
                            <form>
                                {
                                    this.state.isError ? 
                                        <span className="uncorrect__data__in__contacts__page">{ this.state.errorText }</span> 
                                    : '' 
                                }
                                <input type="text" name="name" value={ this.state.value } 
                                    placeholder="Ваше ім'я: " className="contacts__form__input"
                                    onChange={ ( event ) => this.inputChange( event ) }
                                />
                                <input type="email" name="email" value={ this.state.value } 
                                    placeholder="Ваш email: " className="contacts__form__input" 
                                    onChange={ ( event ) => this.inputChange( event ) }
                                />
                                <h2>Введіть повідомлення:</h2>
                                <textarea name="message" value={ this.state.value } 
                                    className="contacts__form__textarea" 
                                    onChange={ ( event ) => this.inputChange( event ) }
                                />
                                <button type="button" className="contacts__form__button"
                                    onClick={ this.processingData }
                                >
                                    Надіслати
                                </button>
                                <Link to="/" className="contacts__form__back">Back</Link>
                            </form>
                        </React.Fragment>
                    : 
                        <React.Fragment>
                            <div className="modal__block">
                                <span className="block__text">
                                    <DoneOutlineIcon color="primary" style={{ fontSize: 30 }} />
                                    <p className="modal__text">Повідомлення успішно відправлено</p>
                                </span>
                                <Link to="/" className="contacts__back__button">Back</Link>
                            </div>   
                        </React.Fragment>  
                }
            </div>
        )
    }
}

export default ContactsPage