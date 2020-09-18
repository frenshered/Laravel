import React from 'react'
import axios from 'axios'

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
        }

        this.emailChange    = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.fonmSubmit     = this.fonmSubmit.bind(this)
    }

    passwordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    emailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    fonmSubmit = (e) => {
        e.preventDefault()

        axios.post('/form', {
            email: this.state.email,
            password: this.state.password
        })
        .then( (response) => {
            console.log(response.data);
        })
        .catch( (e) => {
            console.log(e);
        })

        console.log(this.state)
    }

    render() {
        return (
            <form method="POST" onSubmit={ this.fonmSubmit } action="{{ route('formSend') }}">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onChange={ this.emailChange } />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" onChange={ this.passwordChange } />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form