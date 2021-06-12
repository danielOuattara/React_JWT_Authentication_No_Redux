
import React, {Component} from 'react';
import Form  from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from '../services/auth.service';

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                this field is required !
            </div>
        );
    }
};

export default class login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.biind(this);

        this.state =  {
            username: '',
            password: '',
            loading: '',
            message:'',
        };
    }

    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleLogin(event) {
        event.preventDefault();
        this.setState ({
            message: '',
            loading: true
        })

        this.form.validateAll();

        if (this.checkBtn.context._erors.length === 0) {
            AuthService.login(this.state.username, this.state.password)
            .then(() => {
                this.props.history.push('/profile');
                window.location.reload();
            })
            .catch( err => {
                const resMessage = (err.res && err.res.data && err.res.data.message) ||
                                    err.message ||  err.toString();
                this.setState({
                    loading: false,
                    message: resMessage
                });
            })
        
        } else {
            this.setState({loading: false})
        }
    }

    render() {
        return(
            <div className="col-mde-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form  onSubmit = {this.handleLogin}
                           ref= {c => { this.form = c }} >

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input type='text'
                                   className="form-control"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.onChangeUsername}
                                   validations={[required]} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input type='password'
                                   className="form-control"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChangePassword}
                                   validations={[required]} />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block"
                                    disabled={this.state.loading}>
                                {this.state.loading && ( 
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role='alert'>
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{display:'none'}}
                                     ref={c => {this.checkBtn= c}} />
                    </Form>
                </div>
            </div>
        )
    }
}