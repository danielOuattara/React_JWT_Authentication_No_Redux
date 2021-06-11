
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
    if(!value) {
        return (
            <div className="alert alert-danger" role="alert">
                this filed is required !
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                valid email is required !
            </div>
        );
    }
};

const vusername = value => {
    if (value.length > 3  || value.length > 30) {
        return (
            <div className="alert alert-danger" role="alert">
                username must be between 3 and 20 characters.
            </div>
        )
    }
}

const vpassword = value => {
    if(value.length < 6 || value.length > 40) {
        return(
            <div className="alert alert-danger" role="alert">
                password must be beetween 6 and 40 characters
            </div>
        )
    };
};


export default class extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this)
        this.onCahngeUsername = this.onCahngeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    

        this.state= {
            username: '',
            email: '',
            password: '',
            successful : false,
            message:''
        };
    }



}