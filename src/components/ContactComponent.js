import React from 'react'
import { Label } from 'reactstrap';
import FormError from './FormErrorComponent'




export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            comment: '',
            emailTouched: false,
            errors: {
                name: false,
                email: false,
                emailInvalid: false,
                comment: false
            }
        }
        this.changeForm = this.changeForm.bind(this)
        this.isError = this.isError.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeForm(e) {
        this.setState({...this.state, name: e.target.value, errors:{name:false, email: this.state.errors.email, comment: this.state.errors.comment} })
    }

    isError(val) {
        let name = this.state.name
        let email = this.state.email
        if (val === 'name') {
            if (name.length < 4 && name.length > 0)
                return true
            else
                return false
        }

        if (val === 'email') {

            return !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));

        }

    }

    handleSubmit(e) {
        if (this.state.name === '') {
            this.setState({ ...this.state, errors: { name: true, email: this.state.errors.email, comment: this.state.errors.comment } })
        }
        else if (this.state.email === '') {
            this.setState({ ...this.state, errors: { name: this.state.errors.name, email: true, comment: this.state.errors.comment } })

        }
        // if(this.isError(this.state.email)){
        //     this.setState({})
        // }
        else if (this.state.comment === '') {
            this.setState({ ...this.state, errors: { name: this.state.errors.name, email: this.state.errors.email, comment: true } })

        }

        console.log(this.state)
        e.preventDefault()
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className="row form-group">
                            <div className="col">
                                <label className="formLabel">Name:</label>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col">
                                <input
                                    className="form-control"
                                    type="text" value={this.state.name}
                                    onChange={this.changeForm}
                                />
                            </div>
                        </div>
                        {
                            this.isError('name') &&
                            <FormError message="Error" />

                        }
                        {
                            this.state.errors.name &&
                            <FormError message="Empty" />
                        }
                    </div>

                    <br />
                    <div>
                        <div className="row form-group">
                            <div className="col">
                                <label className="formLabel">Email:</label>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col">
                                <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    onBlur={e => this.setState({ emailTouched: true })}
                                />
                            </div>
                        </div>
                        {
                            this.isError('email') && this.state.emailTouched &&
                            <FormError
                                message="Email format is invalid"
                            />
                        }
                    </div>

                    <br />

                    <div>
                        <div className="row form-group">
                            <div className="col">
                                <label className="formLabel">Comment:</label>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col">
                                {/* <input type="text" value={this.state.email} onChange={e => this.setState({email: e.target.value})} /> */}
                                <textarea className="form-control" rows="12" cols="24" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="row form-group">
                            <div className="col d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="form-control"
                                    style={{ width: '50%' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        )
    }
}