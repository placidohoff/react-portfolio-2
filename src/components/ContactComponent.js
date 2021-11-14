import React from 'react'
import { Label } from 'reactstrap';
import FormError from './FormErrorComponent'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'




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
        this.setState({ ...this.state, name: e.target.value, errors: { name: false, email: this.state.errors.email, comment: this.state.errors.comment } })
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

        let isNameEmpty = this.state.name === '' ? true : false
        let isEmailEmpty = this.state.email === '' ? true : false
        let isCommentEmpty = this.state.comment === '' ? true : false

        this.setState({ ...this.state, errors: { name: isNameEmpty, email: isEmailEmpty, comment: isCommentEmpty } })



        console.log(this.state)
        e.preventDefault()
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <div className="row form-group">
                                    <div className="col">
                                        <label className="formLabel">Name:</label>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-12">
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
                                    <div className="col-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.email}
                                            onChange={e => this.setState({ email: e.target.value, errors: { name: this.state.errors.name, email: false, comment: this.state.errors.comment } })}
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
                                {
                                    this.state.errors.email &&
                                    <FormError message="empty" />
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
                                    <div className="col-10">
                                        {/* <input type="text" value={this.state.email} onChange={e => this.setState({email: e.target.value})} /> */}
                                        <textarea
                                            className="form-control"
                                            rows="12"
                                            cols="24"
                                            value={this.state.comment}
                                            onChange={e => { this.setState({ comment: e.target.value, errors: { name: this.state.errors.name, email: this.state.errors.email, comment: false } }) }}
                                        />

                                    </div>
                                    {
                                        this.state.errors.comment &&
                                        <FormError message="empty" />
                                    }
                                </div>
                            </div>
                            <br />
                            <div>
                                <div className="row form-group">
                                    <div className="col-10 d-flex justify-content-center">
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
                    <div className=" ml-5 mt-5  justify-content-center col-12 col-md-6">
                        <div className="row d-flex text-white justify-content-center">
                            <div className="col-10 ml-4 d-flex justify-content-center">
                                <MdOutlineEmail 
                                className="justify-self-center ml-4"
                                    color="white"
                                    fontSize="5.5em"
                                />

                                
                                <h6 className="mt-4 m-4">placido.hoff@gmail.com</h6>
                            </div>
                        </div>
                        <div className="row d-flex text-white justify-content-center mt-5">
                            <div className="col-10  d-flex justify-content-center">
                                <FaPhone
                                className="justify-content-center"
                                    color="white"
                                    fontSize="5.5em"
                                />

                                
                                <h6 className="mt-4 m-4">(405)401-6301</h6>
                            </div>
                        </div>
                        <div className="row d-flex text-white justify-content-center mt-5">
                            <div className="col-10 ml-3 d-flex justify-content-center">
                                <GoLocation
                                className="justify-content-center"
                                    color="white"
                                    fontSize="5.5em"
                                />

                                
                                <h6 className="mt-4">Providence,RI 02907</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}